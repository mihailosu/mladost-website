const { Sequelize, DataTypes } = require('sequelize');
const notificationModel = require('../models/notification');
const eventModel = require('../models/event');
const adminModel = require('../models/admin');
const genreModel = require('../models/genre');
const eventGenreModel = require('../models/event-genre');

const config = require('../config');

const sequelize = new Sequelize(
    // 'postgres://postgres:postgres@localhost:5432/MladostWebsite', 
    config.databaseURI,
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
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        }, { sequelize , modelName: 'genre'});
    })();

    // Init Event-Genre join table

    await (async () => {
        eventGenreModel.init(null, { sequelize, modelName: "event-genre" })
    })();

    // Define relationships

    genreModel.belongsToMany(
        eventModel, 
        { 
            through: eventGenreModel,
            onDelete: 'cascade' 
        }
    );
    eventModel.belongsToMany(
        genreModel, 
        { 
            through: eventGenreModel,
            onDelete: 'cascade' 
        }
    );


    sequelize.sync();

    return app;
}