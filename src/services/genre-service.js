const genreModel = require('../models/genre');

class GenreService {

    async getAll(){

        return genreModel.findAll({
            order: [
                ['name', 'ASC']
            ]
        })

    }

}

module.exports = new GenreService();