const express = require('express');
const eventService = require('../../services/event-service');

const isAuth = require('../middleware/isAuth');
const isExpired = require('../middleware/isExpired');

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

    route.post('/addevent', isAuth, isExpired, (req, res) => {

        console.log(req.token)

        return res.json("Authenticated").status(200);

    })

}