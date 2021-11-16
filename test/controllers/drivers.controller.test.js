const assert = require('assert')
const request = require('supertest')
const app = require('../../app')
const mongoose = require('mongoose')
const driver = mongoose.model('driver')

describe('Drivers controller', () => {
    it('posts to /api/drivers and creates a new driver', async () => {
        const oldCount = await driver.count()
        await request(app).post('/api/drivers').send({ email: 'test@test.com' })
        const newCount = await driver.count()
        // console.log(`${newCount} ${oldCount}`)
        assert(newCount === oldCount + 1)

    })
})