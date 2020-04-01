const express = require('express');
const notifications = require('./routes/notifications');


module.exports = async () => {

    const app = express.Router();

    notifications(app);

    return app;

}