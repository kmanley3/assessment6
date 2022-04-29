
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('See-All-Bots button shows up when page loads', async() => {
    const seeAll = await driver.findElement(By.id('see-all'))
    const displayed = await seeAll.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins header shows up when page loads', async() => {
    const wins = await driver.findElement(By.id('wins'))
    const displayed = await wins.isDisplayed()
    expect(displayed).toBe(true)
})

test('Losses header shows up when page loads', async() => {
    const losses = await driver.findElement(By.id('losses'))
    const displayed = await losses.isDisplayed()
    expect(displayed).toBe(true)
})

test('No bots are displayed when the page first loads', async() => {
    const botCards = await driver.findElement(By.className('bot-card outline'))
    const displayed = await botCards.isDisplayed()
    expect(displayed).toBe(false)
})