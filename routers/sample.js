const express = require("express")
const router = express.Router()
const sampleController = require("../controllers/sampleController")
const { validateSample } = require("../middleware/validateSample")
const { check } = require("express-validator")


router.get      ("/getall",                              sampleController.getAllSample)
router.post     ("/setSample",          [
    check("mail").not().isEmpty().withMessage("el campo mail es obligatorio").isEmail().withMessage("la direccion de email no tiene elformato adecuado"),
    check("name").not().isEmpty().withMessage("el campo nombre es obligatorio"),
    check("style").not().isEmpty().withMessage("el campo estilo es obligatorio"),
    check("srm").not().isEmpty().withMessage("el campo color es obligatorio"),
    check("abv").not().isEmpty().withMessage("el campo alcohol es obligatorio"),
    check("category").not().isEmpty().withMessage("el campo ecategoria es obligatorio")
]                                                      , sampleController.setSample)
router.get      ("/getSampleById/:id",  validateSample , sampleController.getSampleById)
router.put      ("/editSample/:id",     validateSample , sampleController.editSample)
router.delete   ("/deleteSample/:id",   validateSample , sampleController.deleteSample)


module.exports = router