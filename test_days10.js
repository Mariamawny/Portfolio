const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`file://${path.join(__dirname, 'index.html')}`);
  
  // Click on Projects tab
  await page.click('.nav-item[data-tab="projects"]');
  await page.waitForTimeout(500);
  
  // Click on Days 10 project card
  await page.click('.project-card-trigger[data-project-id="days10"]');
  await page.waitForTimeout(1000);
  
  // Take screenshot of the modal
  await page.screenshot({ path: 'days10_modal_verify.png', fullPage: true });
  console.log('Screenshot saved to days10_modal_verify.png');
  
  await browser.close();
})();
