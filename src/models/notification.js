
const { Model } = require('sequelize');

class Notification extends Model {}

module.exports = Notification;

// module.exports = async (sequelize) => {


//     Notification.init({
//         heading: DataTypes.STRING,
//         text: DataTypes.STRING,
//         date: DataTypes.DATE
//     }, { sequelize, modelName: 'notification'});


// }