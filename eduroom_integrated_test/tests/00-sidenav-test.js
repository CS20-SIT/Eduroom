const puppeteer = require('puppeteer')
const assert = require('assert')
describe("Side Nav Testing", () => {
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
    afterEach (() => {
        browser.close()
    })
    it("Can navigate to landing page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(2)')
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(1)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-01-landing.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/')
    })
    it("Can navigate to tutor page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(2)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-02-tutor.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/tutor')
    })
    it("Can navigate to learningpath page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(3)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-03-learningpath.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/learningpath')
    })
    it("Can navigate to course page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(4)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-04-course.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/course')
    })
    it("Can navigate to forum page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(5)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-05-forum.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/forum')
    })
    it("Can navigate to support page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(6)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-06-support.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/support')
    })
    it("Can navigate to chat page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(7)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-07-chat.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/chat')
    })
    it("Can navigate to coin shop page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(8)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-08-coin-shop.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/coin-shop')
    })
    it("Can navigate to coupon page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(9)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-09-coupon.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/user/coupon')
    })
    it("Can navigate to edqiz page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(10)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-10-edqiz.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/edqiz')
    })
    it("Can navigate to Grader System page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(11)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-11-graderSystem.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/graderSystem')
    })
    it("Can navigate to Calendar page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(12)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-12-calendar.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/calendar')
    })
    it("Can navigate to Certificate page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(13)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-13-certificates.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/user/certificates')
    })
    it("Can navigate to Setting page", async () => {
        await page.waitForSelector('div.side-item')
        await page.click('div.side-item:nth-child(14)')
        await page.waitFor(5000)
        await page.screenshot({path: '/screenshots/00-sidenav-test-14-setting.png'})
        assert.strictEqual(page._frameManager._mainFrame._url,'http://nginx/user/edit')
    })
})