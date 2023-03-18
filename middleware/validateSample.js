const {Samples} = require("../models/sample")
const validateSample = async (req, res, next) =>{
    try {
        const sampleIdParam = await Samples.findById(req.params.id)
        const sampleParam = await Samples.findById(req.params.sample)
        const sampleBody = await Samples.findById(req.body.sample)
        if (sampleIdParam !== null || sampleParam !== null ||sampleBody !== null) {
            next()
        } else {
            res.status(500).json({msg: "No existe ninguna Muestra con ese identificador"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validateSample}