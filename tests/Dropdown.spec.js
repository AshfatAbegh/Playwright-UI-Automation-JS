const {test, expect} = require('@playwright/test');

test('Handle Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   
     //multiple ways to select option from the dropdown 
    //await page.locator("#country").selectOption({label: 'Canada'}); //select by label / visible text
   //await page.locator("#country").selectOption('Canada'); //select by visible text - direct value
  //await page.locator("#country").selectOption({value: 'canada'}); //select by value attribute
 //await page.locator("#country").selectOption({index: 1}); //select by index
   await page.selectOption("#country", {label: 'Canada'}); // Alternative way to select option by label / visible text
   
    //Assertions
    //1) Check total number of options in the dropdown - Approach 1
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);
      
    //2) Check total number of options in the dropdown - Approach 2
    const options = await page.$$('#country option');
    //console.log("Total options in the dropdown: " + options.length);
    await expect(options.length).toBe(10);

    //3) Check presence of value in the dropdown - Approach 1 
    const content = await page.locator('#country').textContent();
    await expect(content.includes('Australia')).toBeTruthy();

    //4) Check presence of value in the dropdown - Approach 2 - using looping
      // const dropdownOptions = await page.$$('#country option');
      // let status = false;
      // for(const option of dropdownOptions){
      //   //console.log(await option.textContent());
      //   let value = await option.textContent();
      //   if(value.includes('Australia')){
      //     status = true;
      //     break;
      //   }
      // }
      // await expect(status).toBeTruthy();

      //5) Select option from the dropdown using loop
      const dropdownOptions = await page.$$('#country option');
      for(const option of dropdownOptions){
        let value = await option.textContent();
        if(value.includes('Australia')){
          await page.selectOption("#country", value);
          break;
        }
      }

    await page.waitForTimeout(5000);
});
