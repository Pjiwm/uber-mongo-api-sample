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
app.use(async (err, req, res, next) => {
    res.status(422).send({error: err.message})
})
module.exports = app