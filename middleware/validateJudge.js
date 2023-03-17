const {Judges} = require("../models/judge")
const validateJugde = async (req, res, next) =>{
    try {
        const judge = await Judges.findById(req.params.id)
        if (judge !== null) {
            next()
        } else {
            res.status(500).json({msg: "No existe ningun Juez con ese identificador"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validateJugde}