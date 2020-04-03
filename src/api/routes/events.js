const express = require('express');
const eventService = require('../../services/event-service');

const isAuth = require('../middleware/isAuth');
const isExpired = require('../middleware/isExpired');

const eventModel = require('../../models/event');
const genreModel = require('../../models/genre');

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

    route.post('/add', isAuth, isExpired, (req, res) => {

        let evt = req.body;
        
        eventService.addEvent(evt)
            .then(retval => {
                console.log("OK")
                return res.json().status(200);
            })
            .catch(err => {
                console.log("Error 2")
                return res.json().status(500);
            });


    })

    route.delete('/delete/:id', isAuth, isExpired, (req, res) => {

        let eventId = req.params.id;

        (async () => {
            eventService.deleteEvent(eventId);
        })();

        return res.json().status(200);
    })

}