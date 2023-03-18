const express = require("express")
const router = express.Router()
const sampleController = require("../controllers/sampleController")
const { validateSample } = require("../middleware/validateSample")


router.get      ("/getall",                              sampleController.getAllSample)
router.post     ("/setSample",                           sampleController.setSample)
router.get      ("/getSampleById/:id",  validateSample , sampleController.getSampleById)
router.put      ("/editSample/:id",     validateSample , sampleController.editSample)
router.delete   ("/deleteSample/:id",   validateSample , sampleController.deleteSample)


module.exports = router