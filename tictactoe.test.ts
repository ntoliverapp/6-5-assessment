import { hasUncaughtExceptionCaptureCallback } from "process"
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('X should appear on center grid', async () => {
    const centerClick = await (await driver).findElement(By.id("cell-4"));
    console.log(centerClick)
    await centerClick.click();

});

test('X should appear on top center grid', async () => {
    const centerClick = await (await driver).findElement(By.id("cell-1"));
    console.log(centerClick)
    await centerClick.click();

});

test('X should appear on bottom center grid', async () => {
    const centerClick = await (await driver).findElement(By.id("cell-7"));
    console.log(centerClick)
    await centerClick.click();

});