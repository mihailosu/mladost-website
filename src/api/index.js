const express = require('express');

const genres = require('./routes/genres');
const notifications = require('./routes/notifications');
const events = require('./routes/events');
const auth = require('./routes/auth');

module.exports = async () => {

    const app = express.Router();

    genres(app);
    notifications(app);
    events(app);
    auth(app);

    return app;

}