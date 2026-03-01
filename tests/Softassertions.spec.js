const {test, expect} = require('@playwright/test');

test('Soft Assertions', async ({page}) => {
 
    await page.goto('https://www.demoblaze.com/');

    //hard assertions
    /*await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('#nava')).toBeVisible();*/

    //soft assertions
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator('#nava')).toBeVisible();
});