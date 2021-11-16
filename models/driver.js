const mongoose = require('mongoose')
const schema = mongoose.Schema

const driverSchema = new schema({
    email: {
        type: String,
        required: true,
    },
    driving: {
        type: Boolean,
        default: false
    }
})

const driver = mongoose.model('driver', driverSchema)
module.exports = driver