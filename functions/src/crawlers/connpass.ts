import puppeteer from 'puppeteer';
import {
  FeedMemo,
  blankFeedMemo,
} from '../services/chamele-on/models/feed-memo';

export const feedConnpass = async (page: puppeteer.Page) => {
  const urls = new Map([
    ['hyogo', 'https://connpass.com/calendar/hyogo/'],
    ['osaka', 'https://connpass.com/calendar/osaka/'],
  ]);

  const memos: FeedMemo[] = [];

  for await (const [pref, url] of urls) {
    const hrefs: string[] = [];

    await Promise.all([page.waitForNavigation(), page.goto(url)]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _ of [0, 1]) {
      const calendar = await page.$(
        '#contents > div.clearfix > div.main_area.mt_20 > table > tbody',
      );

      if (calendar) {
        // カレンダーに表示されているイベントのURLを全て取得
        const hrefList = await calendar.$$eval('a', elements =>
          elements.map(element => element.getAttribute('href')),
        );

        for (const href of hrefList) {
          if (href) {
            hrefs.push(href);
          }
        }
      }

      await Promise.all([
        page.waitForNavigation(),
        page.click(
          '#contents > div.clearfix > div.mb_15 > span > ul > li:nth-child(4) > a',
        ),
      ]);
    }

    // イベント詳細ページから情報を抽出
    for await (const href of hrefs) {
      const memo = { ...blankFeedMemo };

      if (href) {
        await Promise.all([page.waitForNavigation(), page.goto(href)]);
        const eventId = href.match(/\d+\/$/)?.toString();
        memo.eventId = `connpass:${eventId}`;
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
      memo.prefecture = pref;

      memos.push(memo);
    }
  }

  return memos;
};
