const {test, expect} = require('@playwright/test');

test('Handle Multi Select Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from multi select dropdown
    await page.selectOption("#colors", ['Blue', 'Green', 'Red']);
    
    //Assertions
    //1) Check total number of options in the dropdown 
    const options = await page.$$('#colors option');
    await expect(options.length).toBe(5);

    await page.waitForTimeout(5000);

});