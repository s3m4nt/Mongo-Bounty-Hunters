// require mongoose package
const mongoose = require('mongoose')

//define mongoose schema
bountyHunterSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    wantedFor: {
        type: String
    }, 
    client: {
        type: String
    }, 
    reward: {
        type: Number
    }, 
    ship: {
        type: String
    },
    hunters: {
        type: Array
    },
    captured: {
        type: Boolean
    }
})

module.exports = bountyHunterSchema