const {SampleTries} = require("../models/sampleTry")
const validateSampleTry = async (req, res, next) =>{
    try {
        const sampleTry = await SampleTries.findById(req.params.id)
        if (sampleTry !== null) {
            next()
        } else {
            res.status(500).json({msg: "No existe ninguna evaluacion con ese identificador"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validateSampleTry}