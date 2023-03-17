const {Samples} = require("../models/sample")
const {validationResult} = require("express-validator")

module.exports = {
    async getAllSample (req, res) {
        const items = await Samples.find()
        res.status(200).json({items})
    },
    async setSample(req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                //console.log(req.body);
                const item = new Samples(req.body)
                await item.save()
                res.status(200).json({item})
            } else {
                res.status(501).json(err) 
            }    
            
        } catch (error) {
            res.status(501).json(error)   
        }
        
    },
    async getSampleById (req, res) {
        const item = await Samples.findById(req.params.id)
        res.status(200).json({item})
    },
    async editSample (req, res) {
        await Samples.findOneAndUpdate(req.params.id, req.body)
        res.status(200).json(req.body)
    },
    async deleteSample(req, res){
        const sample = await Samples.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Muestra eliminada", judge})
    }
}