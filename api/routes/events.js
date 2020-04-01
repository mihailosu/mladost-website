const express = require('express');
const eventService = require('../../services/event-service');

const route = express.Router();

module.exports = async app => {

    app.use('/events', route);

    route.get('/get/:batch', (req, res) => {

        let batch = parseInt(req.params.batch);

        eventService.getBatch(batch, 10)
            .then(dbRes => {
                return res.json(dbRes).status(200);
            })
            .catch(err => {
                // console.log(err);
                return res.json("Error").status(500);
            });    

    })

}