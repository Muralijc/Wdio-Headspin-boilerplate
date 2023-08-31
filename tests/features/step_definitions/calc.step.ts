import { Given, When, Then } from '@cucumber/cucumber';
import CalculatorPage from '../../page/calculator.page.js';

const calculatorPage = new CalculatorPage();

Given('I start {string} application', async function (appName) {
    await calculatorPage.openApplication(appName);
     await browser.switchContext('NATIVE_APP');
     await browser.pause(3000)
});

When('I add {string} and {string}', async function (num1, num2) {
    await browser.switchContext('NATIVE_APP');
    await calculatorPage.add(num1, num2)
});

Then('I should get {string} as result', async function (result) {
    await calculatorPage.verifyResult(result);
});
