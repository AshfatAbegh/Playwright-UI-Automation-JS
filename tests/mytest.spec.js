import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').dblclick();
  await page.locator('#loginpassword').fill('test');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

//when using playwright codegen if we want to use the auto generated code in our test file then use below command
//npx playwright codegen -o/(--output) tests/mytest.spec.js


//npx playwright codegen --target javascript - for a specific language
//npx playwright codegen -b/(--browser) chromium - for a specific browser
//npx playwright codegen --device "iPhone 13" - for a specific device
//npx playwright codegen --viewport-size "1280,720" - for a specific viewport size