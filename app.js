const express = require('express')
const cors = require("cors")
const logger = require("morgan")


const app = express()

const indexRouter = require("./routers/index")
const userRouter = require("./routers/user")
const apiRouter = require("./routers/api")
const judgeRouter = require("./routers/judge")
const {connect} = require ("./db/db")
const { Router } = require('express')


app.use(logger("dev"))
app.use(express.json())
app.use(cors())


//http://localhost:3000/user
app.use('/', indexRouter)
app.use('/user',userRouter)
app.use('/api',apiRouter)
app.use('/judge',judgeRouter)

connect()

module.exports = app

