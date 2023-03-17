const express = require('express')
const cors = require("cors")
const logger = require("morgan")


const app = express()

const judgeRouter = require("./routers/judge")
const {connect} = require ("./db/db")
const { Router } = require('express')


app.use(logger("dev"))
app.use(express.json())
app.use(cors())


//http://localhost:3000/user
app.use('/judge',judgeRouter)

connect()

module.exports = app

