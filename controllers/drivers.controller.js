const driver = require('../models/driver')

class DriversController {

    /**
     * sends a greeting
     * @param {*} req - request object
     * @param {*} res - response object
     */
    async greeting(req, res) {
        res.send({ 'hi': 'there' })
    }
    /**
     * Creates a new driver
     * @param {*} req - the object that gets posted
     * @param {*} res - the response we give back after we tried to add the request object
     */
    async create({ body }, res) {
        console.log(body)
        console.log('1')
        const newDriver = await driver.create(body)
        console.log(body)
        console.log('2')
        // console.log(body)
        res.send(newDriver)
        console.log(body)
        console.log('3')
    }
}

module.exports = new DriversController()