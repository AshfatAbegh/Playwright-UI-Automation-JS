const {test, expect} = require('@playwright/test');

test('AssertionsTest', async({page}) => {
   
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    await expect(page.locator('.header-logo')).toBeVisible();
    /*const logoElement = page.locator('.header-logo'); - same as above line
    await expect(logoElement).toBeVisible();*/ 
})
    