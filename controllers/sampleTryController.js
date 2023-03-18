const {SampleTries} = require("../models/sampleTry")
const {validationResult} = require("express-validator")

module.exports = {
    async getAllSampleTry (req, res) {
        const items = await SampleTries.find()
        res.status(200).json({items})
    },
    async setSampleTry(req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                //console.log(req.body);
                const item = new SampleTries(req.body)
                await item.save()
                res.status(200).json({item})
            } else {
                res.status(501).json(err) 
            }    
            
        } catch (error) {
            res.status(501).json(error)   
        }
        
    },
    async getSampleTryById (req, res) {
        const item = await SampleTries.findById(req.params.id)
        res.status(200).json({item})
    },
    async getSampleTriesByJudge (req, res) {
        const items = await SampleTries.find({judge: req.params.judge})
        res.status(200).json({items})
    },
    async getSampleTriesBySample (req, res) {
        const items = await SampleTries.find({sample: req.params.sample})
        res.status(200).json({items})
    },
    async editSampleTry (req, res) {
        await SampleTries.findOneAndUpdate(req.params.id, req.body)
        res.status(200).json(req.body)
    },
    async deleteSampleTry(req, res){
        const sample = await SampleTries.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Evaluacion eliminada", sampleTry})
    }
}