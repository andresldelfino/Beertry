const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/",userController.indexUser)
router.get("/info",userController.infoUser)
router.get("/poke",userController.consultaAxios)
router.get("/poke2",userController.consultaAxios2)


module.exports = router