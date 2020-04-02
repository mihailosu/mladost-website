const expressLoader = require('./express');
const databaseLoader = require('./database');

module.exports = async (app) => {

    await expressLoader(app);
    console.log("Express initialized...");

    await databaseLoader(app);
    console.log("Database initialized...");
};