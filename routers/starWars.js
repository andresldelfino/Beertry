const express = require("express")
const router = express.Router()
const starWarsController = require("../controllers/starWarsController")

router.get("/starWarsCharacters",starWarsController.starWarsCharacters)
router.get("/starWarsFilms",starWarsController.starWarsFilms)



module.exports = router