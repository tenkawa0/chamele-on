import puppeteer from 'puppeteer';
import {
  FeedMemo,
  blankFeedMemo,
} from '../services/chamele-on/models/feed-memo';

export const feedCalendar = async (page: puppeteer.Page) => {
  const url = 'https://connpass.com/calendar/hyogo/';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const memos: FeedMemo[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const weeks = await page.$$(
    '#contents > div.clearfix > div.main_area.mt_20 > table > tbody > tr',
  );

  for await (const week of weeks) {
    const days = await week.$$('td');
    for await (const day of days) {
      const items = await day.$$('.events > ul > li');
      for await (const item of items) {
        const memo = { ...blankFeedMemo };
        memo.title = await item.$eval('span', e => e.textContent);
        memos.push(memo);
      }
    }
  }

  return memos;
};
