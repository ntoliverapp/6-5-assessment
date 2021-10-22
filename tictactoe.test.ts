import { hasUncaughtExceptionCaptureCallback } from "process"
import { Builder, Capabilities, By } from "selenium-webdriver"
import{beforeAll, afterAll,test, expect} from '@jest/globals'
import { isBoxedPrimitive } from "util/types"
import { Driver } from "selenium-webdriver/chrome"

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
    await centerClick.click();

    const cellFour = await centerClick.getText();
    expect(cellFour).toContain('X');
    await driver.sleep(4000);
});

test('X should appear on top center grid', async () => {
    const topCenterClick = await (await driver).findElement(By.id("cell-1"));
    await topCenterClick.click();

    const cellOne = await topCenterClick.getText();
    expect(cellOne).toContain('X');
    await driver.sleep(4000);
});

test('X should appear on bottom center grid', async () => {
    const bottomCenterClick = await (await driver).findElement(By.id("cell-7"));
    await bottomCenterClick.click();
    
    const cellSeven = await bottomCenterClick.getText();
    expect(cellSeven).toContain('X');
    await driver.sleep(4000);

});

test('Computer adds an O', async () => {
    await driver.navigate().refresh();
    await(await driver).findElement(By.id('start-game')).click();

    await driver.findElement(By.id('cell-1')).click();
    const square = await driver.findElement(By.id('cell-0')).getText();

    expect(square).toContain('O');
    await driver.sleep(4000);
});