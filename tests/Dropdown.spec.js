const {test, expect} = require('@playwright/test');

test('Handle Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   
     //multiple ways to select option from the dropdown 
    //await page.locator("#country").selectOption({label: 'Canada'}); //select by label / visible text
   //await page.locator("#country").selectOption('Canada'); //select by visible text - direct value
  //await page.locator("#country").selectOption({value: 'canada'}); //select by value attribute
 //await page.locator("#country").selectOption({index: 1}); //select by index
   await page.selectOption("#country", {label: 'Canada'}); // Alternative way to select option by label / visible text
    

    await page.waitForTimeout(5000);
});
