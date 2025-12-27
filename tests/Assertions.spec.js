const {test, expect} = require('@playwright/test');

test('AssertionsTest', async({page}) => {
   
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    await expect(page.locator('.header-logo')).toBeVisible();
    /*const logoElement = page.locator('.header-logo'); - same as above line
    await expect(logoElement).toBeVisible();*/ 
    
    const searchStoreBox =  await page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsletterCheckbox = await page.locator('.form-check-input');
    await expect(newsletterCheckbox).toBeChecked();

    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');

    const pageTitle = await page.locator('.page-title h1');
    await expect(pageTitle).toHaveText('Register'); // full text match
    await expect(pageTitle).toContainText('Register'); // partial text match
    //await expect(page.locator('.page-title h1')).toHaveText('Register'); - same as above line

    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    //dropdown options count validation
    await page.goto('https://vitalets.github.io/combodate/');
    const dayOptions = await page.locator("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(2) > select:nth-child(1) option");
    await expect(dayOptions).toHaveCount(32);

    const monthOptions = await page.locator("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(2) > select:nth-child(2) option");
    await expect(monthOptions).toHaveCount(13);

    const yearOptions = await page.locator("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(2) > select:nth-child(3) option");
    await expect(yearOptions).toHaveCount(47);
})
    