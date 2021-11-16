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

    /**
     * Reads from database and retrieves driver
     * @param {*} params.id - the id of the driver we want to get as a response
     * @param {*} res - the driver with the given id
     */
    async get({params}, res, next) {
        const foundDriver = await driver.findById(params.id).catch(next)
        res.send(foundDriver)
    }
    /**
     * Reads all drivers from database
     * @param {*} res - all drivers in database
     */
    async getAll(req, res, next) {
        const drivers = await driver.find().catch(next)
        res.send(drivers)
    }

    /**
     * Updates a driver
     * @param {*} params.id - the id of the driver we want to update
     * @param {*} res - the response we give back after the driver is updated
     */
    async edit({ body, params }, res, next) {
        const editedDriver = await driver.findByIdAndUpdate({ _id: params.id }, body).catch(next)
        res.send(await driver.findById(params.id))
    }
    /**
     * 
     * @param {*} params.id - the id of the driver we want to delete 
     * @param {*} res 
     */
    async delete({ body, params }, res, next) {
        const removedDriver = await driver.findByIdAndDelete(params.id).catch(next)
        res.status(204).send(removedDriver)
    }
}

module.exports = new DriversController()