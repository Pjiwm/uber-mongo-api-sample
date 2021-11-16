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
     * @param {*} body - the body of the request
     * @param {*} res - the response we give back after we tried to add the request object
     */
    async create({ body }, res, next) {
        const newDriver = await driver.create(body).catch(next)
        res.send(newDriver)
    }

    async edit({ body, params }, res, next) {
        await driver.findByIdAndUpdate({ _id: params.id }, body).catch(next)
        res.send(await driverfindById({ _id: params.id }).catch(next))
    }
}

module.exports = new DriversController()