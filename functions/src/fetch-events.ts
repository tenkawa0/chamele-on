/* eslint-disable no-console */
import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import puppeteer from 'puppeteer';

import { feedConnpass } from './crawlers/connpass';
import { saveFeedMemo } from './firestore-admin/feed-memo';

const PUPPETEER_OPTIONS = {
  args: [
    '--disable-gpu',
    '-–disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
  ],
  headless: true,
};

module.exports = functions
  .region(functions.config().locale.region)
  .runWith({
    timeoutSeconds: 300,
    memory: '2GB',
  })
  .pubsub.schedule('0 2 1,10,20 * *')
  .timeZone(functions.config().locale.timezone)
  .onRun(async () => {
    const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
    const page = await browser.newPage();
    const db = admin.firestore();

    const memos = await feedConnpass(page);
    const fetchCount = await saveFeedMemo(db, memos, 'connpass');

    await browser.close();
    console.log(`Fetched Connpass events. Wrote ${fetchCount} memos.`);
  });
