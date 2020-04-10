const express = require('express');

const genreService = require('../../services/genre-service');

const route = express.Router();

module.exports = async app => {

    app.use('/genres', route);

    route.get('/get', (req, res) => {

        genreService.getAll()
            .then(dbRes => res.json(dbRes).status(200))
            .catch(err => res.json("Error").status(500));

    });


    return app;
}