const express = require("express")
const router = express.Router()
const sampleTryController = require("../controllers/sampleTryController")
const { validateSampleTry } = require("../middleware/validateSampleTry")
const { validateJugde } = require("../middleware/validateJudge")
const { validateSample } = require("../middleware/validateSample")

const { check } = require("express-validator")


router.get("/getall"                                                        ,sampleTryController.getAllSampleTry)
router.post("/setSampleTry",                  validateJugde, validateSample ,sampleTryController.setSampleTry)
router.get("/getSampleTryById/:id",           validateSampleTry             ,sampleTryController.getSampleTryById)
router.get("/getSampleTriesByJudge/:judge",   validateJugde                 ,sampleTryController.getSampleTriesByJudge)
router.get("/getSampleTriesBySample/:sample", validateSample                ,sampleTryController.getSampleTriesBySample)
router.put("/editSampleTry/:id",              validateSampleTry             ,sampleTryController.editSampleTry)
router.delete("/deleteSampleTry/:id",         validateSampleTry             ,sampleTryController.deleteSampleTry)


module.exports = router