const puppeteer = require('puppeteer')
const assert = require('assert')
describe("Landing Page Testing", () => {
    var browser, page, navigationPromise;
    beforeEach(async () => {
        browser = await puppeteer.launch({
            args: [
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--disable-dev-shm-usage'
            ]
          })
          page = await browser.newPage()
          navigationPromise = page.waitForNavigation()
          await page.goto('http://nginx')
          await page.setViewport({ width: 1280, height: 1024 })
          await navigationPromise
    })
    it("Test Get Started Button", async () => {
        await page.waitForSelector('#get-start-btn')
        await page.click('#get-start-btn')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/01-landing-page-test-01-get-start.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/login')
    })
    it("Test Cart Button",async () => {
        await page.waitForSelector("#cart-btn")
        await page.click("#cart-btn")
        await page.waitForSelector("#cart-title")
        await page.screenshot({path: '/screenshots/01-landing-page-test-02-cart.png'})
        const title = await page.$eval('#cart-title',e=>e.innerText)
        assert.strictEqual(title,'Added to cart')
    })
    it("Test Login Button",async() => {
        await page.waitForSelector("#log-in-btn")
        await page.click("#log-in-btn")
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/01-landing-page-test-03-login.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/login')     
    })
    it("Test Signup Button",async() => {
        await page.waitForSelector("#sign-up-btn")
        await page.click("#sign-up-btn")
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/01-landing-page-test-04-signup.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/register')     
    })
    it("Test course click",async () => {
        await page.waitForSelector(".trending")
        await page.click(".trending:nth-child(1)")
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/01-landing-page-test-05-course.png'})
        const url = page._frameManager._mainFrame._url
        let found = url.indexOf("/course/") != -1;
        assert.strictEqual(found,true)    
    })
    // Todo : Implementing Searching (Wait from group13 answer)
    afterEach (() => {
        browser.close()
    })
})
