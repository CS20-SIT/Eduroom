const request = require('supertest')
const app = require('../src/server')

describe('00 Test Routes', () => {
    it('can get test route', async () => {
        const res = await request(app).get('/api/test').send()
    })
});