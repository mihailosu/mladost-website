// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as cors from 'cors';

const cors = require('cors');
const bodyParser = require('body-parser');
const routerLoader = require('../api');

module.exports = async app => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    
    router = await routerLoader();
    app.use('/', router);

    return app;
}