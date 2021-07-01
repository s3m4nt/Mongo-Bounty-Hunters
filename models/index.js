//require mongoose
const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    const uri = process.env.ATLAS_URI

    // connect mongoose to atlas v5 conn methods
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`You have connected ... ${db.host}:${db.port}`)
    })

    db.on('error', (err) => {
        console.log(`NO Connection, ERROR ${err}`)
    })

    module.exports = {
        connect,
        bountyHunter: mongoose.model('bountyHunter', require('./bountyHunter.js'))
    }
}