const express = require("express")
const router = express.Router()
const sampleController = require("../controllers/sampleController")


router.get      ("/getall",             sampleController.getAllSample)
router.post     ("/setSample",          sampleController.setSample)
router.get      ("/getSampleById/:id",  sampleController.getSampleById)
router.put      ("/editSample/:id",     sampleController.editSample)
router.delete   ("/deleteSample/:id",   sampleController.deleteSample)


module.exports = router