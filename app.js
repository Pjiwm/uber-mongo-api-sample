const express = require('express')
const app = express()
const routes = require('./router/routes')

routes(app)


module.exports = app