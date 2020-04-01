const express = require('express');

const notifications = require('./routes/notifications');
const events = require('./routes/events');

module.exports = async () => {

    const app = express.Router();

    notifications(app);
    events(app);

    return app;

}