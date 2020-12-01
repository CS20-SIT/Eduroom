const request = require('supertest')
const app = require('../src/server')

// afterAll(async (done) => {
//     await pool.end()
//     done()
// })

describe('00 Test Routes', () => {
    it('can get test route', async (done) => {
        await request(app).get('/socket-chat/test').expect(200)
        done()
    })
});