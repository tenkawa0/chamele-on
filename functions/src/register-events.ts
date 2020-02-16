/* eslint-disable no-console */
import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { subDays } from 'date-fns';

import { collectionName } from './services/chamele-on/constants';
import { FeedMemo } from './services/chamele-on/models/feed-memo';
import { createEvent } from './firestore-admin/event';
import { sleep } from './utils/timer';

module.exports = functions
  .region(functions.config().locale.region)
  .runWith({
    timeoutSeconds: 500,
    memory: '1GB',
  })
  .pubsub.schedule('5,10,15 2 1,10,20 * *')
  .timeZone(functions.config().locale.timezone)
  .onRun(async () => {
    const db = admin.firestore();
    const yesterday = subDays(new Date(), 1);
    const snap = await db
      .collection(collectionName.feedMemos)
      .where('fetchedAt', '<', yesterday)
      .limit(200)
      .get();
    let count = 0;

    for await (const doc of snap.docs) {
      const memo = doc.data() as FeedMemo;

      await createEvent(db, memo);
      count += 1;
      await sleep(1000);
    }

    console.log(`Registered ${count} events.`);
  });
