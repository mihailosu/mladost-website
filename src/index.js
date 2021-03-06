const loaders = require('./loaders');
const express = require('express');

const config = require('./config');

async function startServer() {

    const app = express();

    await loaders(app);

    app.listen(config.port, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log("Server ready...");
    });

};

startServer();