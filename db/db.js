const mongoose = require ("mongoose")
require("dotenv").config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log("Base de Datos conectada");
    } catch {
        console.log("No se pudo conectar a la base de datos");    
    }   
}


module.exports = {connect}