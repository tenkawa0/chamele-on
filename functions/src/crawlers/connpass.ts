import puppeteer from 'puppeteer';
import {
  FeedMemo,
  blankFeedMemo,
} from '../services/chamele-on/models/feed-memo';

export const feedConnpass = async (page: puppeteer.Page) => {
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
        memo.eventId = href.match(/\d+/)?.toString() ?? '';
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

      memo.administrator = 'connpass';
      memo.prefecture = 'hyogo';

      memos.push(memo);
    }
  }

  return memos;
};
