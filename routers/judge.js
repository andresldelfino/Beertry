const express = require("express")
const router = express.Router()
const judgeController = require("../controllers/judgeController")
const { validateJugde } = require("../middleware/validateJudge")
const { check } = require("express-validator")


router.get("/getall",judgeController.getAllJudge)
router.post("/setJudge",[
    check("name").not().isEmpty().withMessage("el campo nombre es obligatorio"),
    check("dni").not().isEmpty().withMessage("el campo dni es obligatorio")
], judgeController.setJudge)
router.get("/getJudgeById/:id", validateJugde, judgeController.getJudgeById)
router.get("/getJudgeByName/:name", judgeController.getJudgeByName)
router.put("/editJudge/:id", validateJugde, judgeController.editJudge)
router.delete("/deleteJudge/:id", validateJugde, judgeController.deleteJudge)


module.exports = router