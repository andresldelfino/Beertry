const {Judges} = require("../models/judge")
const validateJugde = async (req, res, next) =>{
    try {
        const judgeIdParam = await Judges.findById(req.params.id)
        const judgeParam = await Judges.findById(req.params.judge)
        const judgeBody = await Judges.findById(req.body.judge)
        if (judgeIdParam !== null || judgeParam !== null || judgeBody !== null) {
            next()
        } else {
            res.status(500).json({msg: "No existe ningun Juez con ese identificador"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validateJugde}