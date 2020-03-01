import admin from 'firebase-admin';

import { collectionName } from '../services/chamele-on/constants';
import { FeedMemo } from '../services/chamele-on/models/feed-memo';

export const saveFeedMemo = async (
  db: admin.firestore.Firestore,
  memos: FeedMemo[],
) => {
  const memosRef = db.collection(collectionName.feedMemos);
  let count = 0;

  for await (const memo of memos) {
    await memosRef.doc(memo.eventId ?? '').set(
      {
        ...memo,
        fetchedAt: admin.firestore.Timestamp.fromDate(new Date(0)),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
    count += 1;
  }

  return count;
};
