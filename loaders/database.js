const { Sequelize, DataTypes } = require('sequelize');
const notificationModel = require('../models/notification');
const eventModel = require('../models/event');
const adminModel = require('../models/admin');
const genreModel = require('../models/genre');

const sequelize = new Sequelize(
    'postgres://postgres:postgres@localhost:5432/MladostWebsite', 
    {
        define: {
            timestamps: false /* Don't include the createdAt and updatedAt columns */
        }
    });

module.exports = async app => {

    // await notificationModel(sequelize);

    // await eventModel(sequelize);

    // await adminModel(sequelize);

    // Init Notification table
    await (async () => {
        notificationModel.init({
            title: DataTypes.STRING,
            text: DataTypes.STRING,
            date: DataTypes.DATE
        }, { sequelize, modelName: 'notification'});
    })();

    // Init Notification table
    await (async () => {
        adminModel.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING
        }, { sequelize, modelName: 'admin'});
    })();

    // Init Notification table
    await (async () => {
        eventModel.init({
            title: DataTypes.STRING,
            text: DataTypes.STRING,
            price: DataTypes.INTEGER,
            date: DataTypes.DATE
        }, { sequelize, modelName: 'event'});
    })();

    // Init Genre table
    await (async () => {
        genreModel.init({
            name: DataTypes.STRING
        }, { sequelize , modelName: 'genre'});
    })();

    // Define relationships

    genreModel.belongsToMany(
        eventModel, 
        { 
            through: 'event-genres',
            onDelete: 'cascade' 
        }
    );
    eventModel.belongsToMany(
        genreModel, 
        { 
            through: 'event-genres',
            onDelete: 'cascade' 
        }
    );


    sequelize.sync();

    return app;
}