const {test, expect} = require ('@playwright/test');

test('Radio Button Handling', async ({page}) => {
     
    await page.goto('https://demoqa.com/radio-button');
    
    //radio button - yes
    await page.locator("//label[normalize-space()='Yes']").check();
    //await page.check("//label[normalize-space()='Yes']"); // Alternative way to select radio button
    await expect(await page.locator("//label[normalize-space()='Yes']")).toBeChecked();
    await expect(await page.locator("//label[normalize-space()='Yes']").isChecked()).toBeTruthy();

    //radio button- impressive
    await expect(await page.locator("//label[normalize-space()='Impressive']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); // Pause for 5 seconds to observe the filled input box
});