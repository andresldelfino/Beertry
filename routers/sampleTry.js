const express = require("express")
const router = express.Router()
const sampleTryController = require("../controllers/sampleTryController")
const { validateSampleTry } = require("../middleware/validateSampleTry")
const { validateJugde } = require("../middleware/validateJudge")
const { validateSample } = require("../middleware/validateSample")

const { check } = require("express-validator")


router.get("/getall"                                                        ,sampleTryController.getAllSampleTry)
router.post("/setSampleTry", [
    check("sample").not().isEmpty().withMessage("el campo muestra es obligatorio").isEmail().withMessage("la direccion de email no tiene elformato adecuado"),
    check("judge").not().isEmpty().withMessage("el campo juez es obligatorio"),
    check("turbidity").not().isEmpty().withMessage("el campo turbidez es obligatorio"),
    check("srm").not().isEmpty().withMessage("el campo color es obligatorio"),
    check("foam").not().isEmpty().withMessage("el campo espuma es obligatorio"),
    check("retention").not().isEmpty().withMessage("el campo retencion de espuma es obligatorio"),
    check("balance").not().isEmpty().withMessage("el campo balance es obligatorio"),
    check("body").not().isEmpty().withMessage("el campo body es obligatorio")
    
]                                           , validateJugde, validateSample ,sampleTryController.setSampleTry)
router.get("/getSampleTryById/:id",           validateSampleTry             ,sampleTryController.getSampleTryById)
router.get("/getSampleTriesByJudge/:judge",   validateJugde                 ,sampleTryController.getSampleTriesByJudge)
router.get("/getSampleTriesBySample/:sample", validateSample                ,sampleTryController.getSampleTriesBySample)
router.put("/editSampleTry/:id",              validateSampleTry             ,sampleTryController.editSampleTry)
router.delete("/deleteSampleTry/:id",         validateSampleTry             ,sampleTryController.deleteSampleTry)


module.exports = router