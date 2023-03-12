const mongoose = require("mongoose")

const Schema = mongoose.Schema
const judge = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    img:{
        type: String
    },
    address:{
        type: String
    }
})

const Judges = mongoose.model('Judge',judge)
module.exports = {Judges}
