const {Judges} = require("../models/judge")

module.exports = {
    async getAllJudge (req, res) {
        const items = await Judges.find()
        res.status(200).json({items})
    },
    async setJudge(req, res){
        console.log(req.body);
        const item = new Judges(req.body)
        await item.save()
        res.status(200).json({item})
    }
}