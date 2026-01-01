const {test, expect} = require('@playwright/test');

test('Handle Checkboxes', async ({page}) => {

    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');

    //single checkbox
    //await page.locator("//input[@id='tree-node-desktop' and @type='checkbox']").check();
    await page.check("//input[@id='id_checkboxes_0' and @type='checkbox']"); // Alternative way to select checkbox

    await expect(await page.locator("//input[@id='id_checkboxes_0' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='id_checkboxes_0' and @type='checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='id_checkboxes_1' and @type='checkbox']").isChecked()).toBeFalsy();

    //multiple checkboxes
    const checkBoxLocators = ["//input[@id='id_checkboxes_0' and @type='checkbox']", "//input[@id='id_checkboxes_1' and @type='checkbox']"];

    for(const locator of checkBoxLocators) { //select multiple checkboxes

        await page.locator(locator).check();
        //await page.check(locator); // Alternative way to select checkbox

    }

    await page.waitForTimeout(5000);

    for(const locator of checkBoxLocators) { //unselect multiple checkboxes which are already selected

        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
            //await page.uncheck(locator); // Alternative way to unselect checkbox
        }
    }

    await page.waitForTimeout(5000);
});