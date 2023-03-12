const express = require("express")
const router = express.Router()
const judgeController = require("../controllers/judgeController")

router.get("/getall",judgeController.getAllJudge)
router.post("/setJudge", judgeController.setJudge)

module.exports = router