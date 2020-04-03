const express = require('express');
const notificationService = require('../../services/notification-service');

const isAuth = require('../middleware/isAuth');
const isExpired = require('../middleware/isExpired');

const notificationModel = require('../../models/notification')

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

    route.post('/add', isAuth, isExpired, (req, res) => {

        let notification = req.body;

        notificationService.saveNotification(notification)
            .then(result => {
                return res.json().status(200);
            })
            .catch(err => {
                return res.json().status(500);
            })

    });

    route.delete('/delete/:id', isAuth, isExpired, (req, res) => {

        let notificationId = req.params.id;

        (async () => {
            notificationService.deleteNotification(notificationId)
        })();

        return res.json().status(200);
    });

}