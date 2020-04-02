const express = require('express');

const notifications = require('./routes/notifications');
const events = require('./routes/events');
const auth = require('./routes/auth');

module.exports = async () => {

    const app = express.Router();

    notifications(app);
    events(app);
    auth(app);

    return app;

}