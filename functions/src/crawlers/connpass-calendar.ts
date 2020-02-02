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
  const calendar = await page.$(
    '#contents > div.clearfix > div.main_area.mt_20 > table > tbody',
  );

  if (calendar) {
    // カレンダーに表示されているイベントのURLを全て取得
    const hrefs = await calendar.$$eval('a', elements =>
      elements.map(element => element.getAttribute('href')),
    );

    // イベント詳細ページから情報を抽出
    for await (const href of hrefs) {
      const memo = { ...blankFeedMemo };
      if (href) {
        await page.goto(href, {
          waitUntil: 'domcontentloaded',
        });
      }

      memo.title = await page.title();
      memo.url = href;

      const subTitleHandle = await page.$('.event_subtitle');
      if (subTitleHandle) {
        const subTitle = await (
          await subTitleHandle.getProperty('innerText')
        ).jsonValue();
        memo.subTitle = typeof subTitle === 'string' ? subTitle : '';
      }

      const thumbnaliHandle = await page.$('.event_header_area > a');
      if (thumbnaliHandle) {
        memo.thumbnail = await thumbnaliHandle.evaluate(e =>
          e.getAttribute('href'),
        );
      }

      const groupHandle = await page.$('.group_title > a');
      if (groupHandle) {
        const group = await (
          await groupHandle.getProperty('innerText')
        ).jsonValue();
        memo.group = typeof group === 'string' ? group : '';
        memo.groupUrl = await groupHandle.evaluate(e => e.getAttribute('href'));
      }

      const addressHandle = await page.$('.adr');
      if (addressHandle) {
        const address = await (
          await addressHandle.getProperty('innerText')
        ).jsonValue();
        memo.address = typeof address === 'string' ? address : '';
      }

      const placeHandle = await page.$('.place_name');
      if (placeHandle) {
        const place = await (
          await placeHandle.getProperty('innerText')
        ).jsonValue();
        memo.place = typeof place === 'string' ? place : '';
      }

      const dateHandle = await page.$('.dtstart > .ymd');
      if (dateHandle) {
        const date = await (
          await dateHandle.getProperty('innerText')
        ).jsonValue();
        memo.date = typeof date === 'string' ? date : '';
      }

      const startTimeHandle = await page.$('.dtstart > .hi');
      if (startTimeHandle) {
        const startTime = await (
          await startTimeHandle.getProperty('innerText')
        ).jsonValue();
        memo.startTime = typeof startTime === 'string' ? startTime : '';
      }

      const entryDurationHandle = await page.$('.event_entry_area > .period');
      if (entryDurationHandle) {
        const entryDuration = await (
          await entryDurationHandle.getProperty('innerText')
        ).jsonValue();
        const entryDurationString =
          typeof entryDuration === 'string' ? entryDuration : '';
        if (entryDurationString) {
          let entryDurationArray = entryDurationString.split(/\n/);
          entryDurationArray = entryDurationArray.slice(1);
          [memo.entryStart, memo.entryClose] = entryDurationArray;
        }
      }

      const statusHandle = await page.$(
        '.event_schedule_area > div > .label_status_event',
      );
      if (statusHandle) {
        memo.status = await statusHandle.evaluate(e => e.textContent);
      }

      const hashtagHandle = await page.$('.label_hashtag > a');
      if (hashtagHandle) {
        const hashtag = await (
          await hashtagHandle.getProperty('innerText')
        ).jsonValue();
        memo.hashtag = typeof hashtag === 'string' ? hashtag : '';
        memo.hashtagUrl = await hashtagHandle.evaluate(e =>
          e.getAttribute('href'),
        );
      }
      memo.administrator = 'connpass';

      memos.push(memo);
    }
  }

  return memos;
};
