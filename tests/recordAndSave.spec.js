const {test, expect} = require('@playwright/test');
const { chromium } = require('playwright');

test('sauce.com demo', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByText('$15.99Add to cart').first().click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.getByRole('link', { name: 'Blog The Best Error Reporting' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});