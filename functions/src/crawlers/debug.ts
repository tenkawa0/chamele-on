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
  const weeks = await page.$$(
    '#contents > div.clearfix > div.main_area.mt_20 > table > tbody > tr',
  );

  for await (const week of weeks) {
    const days = await week.$$('td');
    for await (const day of days) {
      const items = await day.$$('.events > ul > li');
      for await (const item of items) {
        console.log(await item.$eval('.tooltip', e => e.textContent));
      }
    }
  }
  await browser.close();
})();
