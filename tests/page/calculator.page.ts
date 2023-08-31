import chai from "chai";
import hsconfig from '../../config/HSConfig.json';
const expect = chai.expect;

export default class CalculatorPage {
  screen: string;
  screenObjects: any;

  constructor() {
    this.screen = "calculator";
    this.initializeScreen();   
  }

  async initializeScreen() {
    try {
          // @ts-ignore
        this.screenObjects = (await import(`../screen/${browser.capabilities.platformName.toLowerCase()}/${this.screen}.screen.js`)).default;   
     } catch (error) {
      console.error("Failed to load screen:", error);
    }
  }

  async openApplication() {
     await browser.activateApp(hsconfig.bundleId);
  }

  async add(num1: string, num2: string) {
    //Clear all value
    console.log(await this.screenObjects);

    // console.log((await this.screenObjects).clear);
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

  async verifyResult(result: any) {
    const output = await $(this.screenObjects.result).getText();
    await expect(output).to.include(result);
  }
}
