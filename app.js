const express = require('express')
const app = express()
const routes = require('./router/routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://uber_mongo/uber')
    console.log('Connected to mongodb')
}

app.use(bodyParser.json())
routes(app)


module.exports = app