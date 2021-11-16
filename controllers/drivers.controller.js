class DriverController {

    /**
     * sends a greeting
     * @param {*} req - request object
     * @param {*} res - response object
     */
    async greeting(req, res) {
        res.send({ 'hi': 'there' })
    }
}

module.exports = new DriverController()