const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
      headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https:/www.onet.pl/");
  await page.goto("https:/www.wp.pl/");
  await browser.close();
})();