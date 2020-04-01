const loaders = require('./loaders');
const express = require('express');

async function startServer() {

    const app = express();

    await loaders(app);

    app.listen(8765, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log("Server ready...");
    });

};

startServer();