const puppeteer = require('puppeteer')
const assert = require('assert')
const {fistname,lastname,email,password} = require('../config')
describe("Register Testing", () => {
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
          await page.goto('http://nginx/register')
          await page.setViewport({ width: 1280, height: 1024 })
          await navigationPromise
    })
    it("Required All Field", async () => {
        await page.waitForSelector('input[name="firstname"]')
        await page.click('#register-btn')
        await page.waitForSelector('.error-text')
        await page.screenshot({path: '/screenshots/02-register-test-01-required-all-field.png'})
        const alert1 = await page.evaluate(()=>document.getElementsByClassName('error-text')[0].innerText)
        const alert2 = await page.evaluate(()=>document.getElementsByClassName('error-text')[1].innerText)
        const alert3 = await page.evaluate(()=>document.getElementsByClassName('error-text')[2].innerText)
        const alert4 = await page.evaluate(()=>document.getElementsByClassName('error-text')[3].innerText)
        assert.strictEqual(alert1, "First Name is required")
        assert.strictEqual(alert2, "Last Name is required")
        assert.strictEqual(alert3, "Email is required")
        assert.strictEqual(alert4, "Password is required")
    })
    it("Can register account", async () => {
        await page.waitForSelector('input[name="firstname"]')
        await page.type('input[name="firstname"]',fistname)
        await page.type('input[name="lastname"]',lastname)
        await page.type('input[name="email"]',email)
        await page.type('input[name="password"]',password)
        await page.waitFor(2000)
        await page.click('#register-btn')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/02-register-test-02-can-register-account.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/')
    })
    it("Can not register with same email", async () => {
        await page.waitForSelector('input[name="firstname"]')
        await page.type('input[name="firstname"]',fistname)
        await page.type('input[name="lastname"]',lastname)
        await page.type('input[name="email"]',email)
        await page.type('input[name="password"]',password)
        await page.waitFor(2000)
        await page.click('#register-btn')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/02-register-test-03-cannot-use-same-email.png'})
        const alert = await page.evaluate(()=>document.getElementsByClassName('error-text')[0].innerText)
        assert.strictEqual(alert,'Email is used')
    })
    afterEach (() => {
        browser.close()
    })
})
