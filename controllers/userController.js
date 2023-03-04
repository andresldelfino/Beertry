const axios = require("axios")


module.exports =  {
    indexUser (req, res)  {
        res.send('Hello user!')
    },
    infoUser(req, res) {
        res.json({
            name: "juan"
        })
    },
    async consultaAxios(req, res){
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        res.json(data)
    },async consultaAxios2(req, res){
        try {
            const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            res.json({response: respuesta.data, status: respuesta.status})
        } catch (error) {
            res.json({response: error.response.data, status: error.response.status})
        }
        
    }}



 