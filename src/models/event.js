const { Model } = require('sequelize');

class Event extends Model {}

module.exports = Event;

// module.exports = async (sequelize) => {

//     Event.init({
//         heading: DataTypes.STRING,
//         text: DataTypes.STRING,
//         price: DataTypes.INTEGER,
//         date: DataTypes.DATE
//     }, { sequelize, modelName: 'event'});

// }