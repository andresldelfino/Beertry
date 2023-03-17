const {Judges} = require("../models/judge")
const {validationResult} = require("express-validator")

module.exports = {
    async getAllJudge (req, res) {
        const items = await Judges.find()
        res.status(200).json({items})
    },
    async setJudge(req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                //console.log(req.body);
                const item = new Judges(req.body)
                await item.save()
                res.status(200).json({item})
            } else {
                res.status(501).json(err) 
            }    
            
        } catch (error) {
            res.status(501).json(error)   
        }
        
    },
    async getJudgeByName (req, res) {
        const item = await Judges.findOne({name: req.params.name})
        res.status(200).json({item})
    },
    async getJudgeById (req, res) {
        const item = await Judges.findById(req.params.id)
        res.status(200).json({item})
    },
    async editJudge (req, res) {
        await Judges.findOneAndUpdate(req.params.id, req.body)
        res.status(200).json(req.body)
    },
    async deleteJudge(req, res){
        const judge = await Judges.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "Juez eliminado", judge})
    }
}