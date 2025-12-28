const {test, expect} = require ('@playwright/test');

test('Input Box Handling', async ({page}) => {
     
    await page.goto('https://www.demoblaze.com/');
    
    //inputbox - username
    const loginButtonn = page.locator('#login2');
    await loginButtonn.click();
    const userNameInput = page.locator('#loginusername');
    await expect(userNameInput).toBeVisible();
    await expect(userNameInput).toBeEmpty();
    await expect(userNameInput).toBeEditable();
    await expect(userNameInput).toBeEnabled();

    await userNameInput.fill('testuser');  

    await page.waitForTimeout(5000); // Pause for 5 seconds to observe the filled input box
});