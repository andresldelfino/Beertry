const { NationalTeams } = require("../models/seleccion")
const { validationResult } = require("express-validator")

module.exports = {
    async verSeleccion (req, res) {
        const item = await NationalTeams.find()
        res.status(200).json({item})
    },
    async guardarSeleccion(req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const item = new NationalTeams(req.body)
                await item.save()
                es.status(201).json({item})      
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
        //console.log(req.body);
        
    },
    async busquedaSeleccion (req, res) {
        const item = await NationalTeams.findOne({pais: req.params.pais})
        res.status(200).json({item})
    },
    async buscarPorIdLaSeleccion (req, res) {
        const item = await NationalTeams.findById(req.params.id)
        res.status(200).json({item})
    },
    async editarLaSeleccion (req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await NationalTeams.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json(req.body)    
            } else {
                res.status(501).json(err)
            }
            
        } catch (error) {
            res.status(501).json(error)
        }   
    },
    async eliminarSeleccion(req, res){
        const seleccion = await NationalTeams.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "adeios seleccion", seleccion})
    }

}

