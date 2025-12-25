//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'; //Same as above line

test('Locators', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');

    // click on login button - property as a locator
    //await page.locator(id="login2").click();
    await page.click('id=login2'); //same as above line

    //provide username - css locator
    //await page.locator('#loginusername').fill('testUsername');
    //await page.type('#loginusername');
    await page.fill('#loginusername', 'pavanol'); //same as above lines

    //provide password - css locator
    await page.fill('#loginpassword', 'test@123');
    
    //click on login button
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
    const logoutLink = await page.locator("#logout2");

    await expect(logoutLink).toBeVisible();

    await page.close();
})

