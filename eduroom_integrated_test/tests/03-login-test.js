const puppeteer = require('puppeteer')
const assert = require('assert');
const { email,password } = require('../config');
describe("Login Testing", () => {
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
          await page.goto('http://nginx/login')
          await page.setViewport({ width: 1280, height: 1024 })
          await navigationPromise
    })
    it("Test Create Account Button", async() => {
        await page.waitForSelector('#login-sign-btn')
        await page.click('#login-sign-btn')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/03-login-page-test-01-create-account.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/register')
    })
    it("Required Email and Password", async () => {
        await page.waitForSelector('#login-email-field')
        await page.click('#login-btn-submit')
        await page.waitForSelector('#email-error')
        await page.waitForSelector('#password-error')
        await page.screenshot({path: '/screenshots/03-login-page-test-02-required-email-password.png'})
        const alert1 = await page.evaluate(()=>document.getElementById('email-error').innerText)
        const alert2 = await page.evaluate(()=>document.getElementById('password-error').innerText)
        assert.strictEqual(alert1, "Email is required")
        assert.strictEqual(alert2, "Password is required")
    })
    it("Required Email", async () => {
        await page.waitForSelector('#login-email-field')
        await page.type('input[name="password"]#login-password-field','1234')
        await page.click('#login-btn-submit')
        await page.waitForSelector('#email-error')
        await page.screenshot({path: '/screenshots/03-login-page-test-03-required-email.png'})
        const alert = await page.evaluate(()=>document.getElementById('email-error').innerText)
        assert.strictEqual(alert, "Email is required")
    })
    it("Required Password", async () => {
        await page.waitForSelector('#login-email-field')
        await page.type('input[name="email"]#login-email-field','test@email.com')
        await page.click('#login-btn-submit')
        await page.waitForSelector('#password-error')
        await page.screenshot({path: '/screenshots/03-login-page-test-04-required-password.png'})
        const alert = await page.evaluate(()=>document.getElementById('password-error').innerText)
        assert.strictEqual(alert, "Password is required")
    })
    it("Validate Email", async () => {
        await page.waitForSelector('#login-email-field')
        await page.type('input[name="email"]#login-email-field','1234')
        await page.type('input[name="password"]#login-password-field','1234')
        await page.click('#login-btn-submit')
        await page.waitForSelector('#email-error')
        await page.screenshot({path: '/screenshots/03-login-page-test-05-invalid-email.png'})
        const alert = await page.evaluate(()=>document.getElementById('email-error').innerText)
        assert.strictEqual(alert, "Email is not valid")
    })
    it("Can Login", async() => {
        await page.waitForSelector('#login-email-field')
        await page.type('input[name="email"]#login-email-field',email)
        await page.type('input[name="password"]#login-password-field',password)
        await page.click('#login-btn-submit')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/03-login-page-test-06-can-login.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/')
    })
    afterEach (() => {
        browser.close()
    })
})
