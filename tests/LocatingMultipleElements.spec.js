const {test, expect} = require('@playwright/test');

test('LocateMultipleElements', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');

    const links = await page.$$('a'); //return all the links of a page

    // for(const link of links){
    //    const linktext =  await link.textContent(); //get the text value of the link
    //    console.log(linktext);
    // }
     
    //page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products ){
        const productName = await product.textContent();
        console.log(productName);
    }
})