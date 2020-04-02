const express = require('express');
const notificationService = require('../../services/notification-service');


const route = express.Router();

module.exports = async app => {

    app.use('/notifications', route);

    route.get('/get', (req, res) => {

        notificationService.getLatest()
            .then(dbRes => {
                return res.json(dbRes).status(200);
            })
            .catch(err => {
                return res.json("Error").status(500);
            });
        
        // return res.json(retval).status(200);

    });

}