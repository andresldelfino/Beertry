const mongoose = require("mongoose")

const Schema = mongoose.Schema
const sampleTry = new Schema({
    sample:{
        type: String,
        required: true
    },
    judge:{
        type: String,
        required: true
    },
    turbidity:{
        type: Number,
        required: true
    },
    srm:{
        type: Number,
        required: true
    },
    foam:{
        type: Number,
        required: true
    },
    retention:{
        type: Number,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    body:{
        type: Number,
        required: true
    },
    obs:{
        type: String
    }
})

const SampleTries = mongoose.model('SampleTry',sampleTry)
module.exports = {SampleTries}
