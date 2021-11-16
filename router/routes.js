const driversController = require('../controllers/drivers.controller')

module.exports = (app) => {
    app.get('/api', driversController.greeting)
    app.post('/api/drivers', driversController.create)
    app.put('/api/drivers/:id', driversController.edit)
    app.delete('/api/drivers/:id', driversController.delete)
}