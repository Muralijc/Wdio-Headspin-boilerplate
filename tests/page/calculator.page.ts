import assert from 'node:assert'
import fs from 'fs';
import path from 'path';
const hsConfig = JSON.parse(fs.readFileSync(path.resolve('./config/headspinConfig.json')).toString())

export default class CalculatorPage {

  screen: string;
  platform: string;
  screenObjects: any;

  constructor() {
    this.screen = "calculator";
    // @ts-ignore
    this.platform = browser.capabilities.platformName.toLowerCase();
    this.initializeScreen();
  }

  async initializeScreen() {
    try {
      this.screenObjects = (await import(`../screen/${this.platform}/${this.screen}.screen.js`)).default;
    } catch (error) {
      console.error("Failed to load screen:", error);
    }
  }

  async openApplication() {
    let activateId = hsConfig.appPackage;
    if (this.platform === 'ios') {
        activateId = hsConfig.bundleId;
    }
    await browser.activateApp(activateId);
  }

  async add(num1: string, num2: string) {
    //Clear all value
    await $(this.screenObjects.clear).waitForDisplayed();
    await $(this.screenObjects.clear).click();

    //add numbers
    for (let i = 0; i < num1.length; i++) {
      await $(this.screenObjects.number(num1.charAt(i))).click();
    }

    await $(this.screenObjects.add).click();
    for (let j = 0; j < num2.length; j++) {
      await $(this.screenObjects.number(num2.charAt(j))).click();
    }

    //Equals
    await $(this.screenObjects.equal).click();
  }

  async verifyResult(result: string) {
    const output = await $(this.screenObjects.result).getText();
    assert.strictEqual(output, result);
  }

}