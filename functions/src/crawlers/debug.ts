import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false,
    slowMo: 100, // slow down by 250ms
  });
  const page = await browser.newPage();

  const url = 'https://connpass.com/calendar/hyogo/';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const calendar = await page.$(
    '#contents > div.clearfix > div.main_area.mt_20 > table > tbody',
  );

  // カレンダーに表示されているイベントのURLを全て取得
  if (calendar) {
    const hrefs = await calendar.$$eval('a', elements =>
      elements.map(element => element.getAttribute('href')),
    );
    console.log(hrefs);
  }

  await browser.close();
})();
