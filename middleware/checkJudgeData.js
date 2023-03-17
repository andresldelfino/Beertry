const {Judges} = require("../models/judge")
const checkJudgeData = async (req, res, next) =>{
    try {
        check("name").not().isEmpty().withMessage("el campo nombre es obligatorio").isLength({max:15, min:3}).withMessage("largo"),
        check("dni").not().isEmpty().withMessage("el campo dni es obligatorio")  
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {checkJudgeData}