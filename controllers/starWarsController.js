const axios = require("axios")


module.exports =  {
    
    async starWarsCharacters(req, res){
        const {data} = await axios.get("https://swapi.py4e.com/api/people")
        res.json(data)
    },
    async starWarsFilms(req, res){
        const {data} = await axios.get("https://swapi.py4e.com/api/films")
        res.json(data)
    }

}


