const driversController = require('../controllers/drivers.controller')

module.exports = (app) => {
    app.get('/api', driversController.greeting)
}