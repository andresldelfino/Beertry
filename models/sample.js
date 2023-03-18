const mongoose = require("mongoose")

const Schema = mongoose.Schema
const sample = new Schema({
    mail:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    style:{
        type: String,
        required: true
    },
    srm:{
        type: Number,
        required: true
    },
    abv:{
        type: Number,
        required: true
    },
    category:{
        type: Number,
        required: true
    },
    obs:{
        type: String
    }
})

const Samples = mongoose.model('Sample',sample)
module.exports = {Samples}
