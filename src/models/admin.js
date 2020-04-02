const { Model } = require('sequelize');

class Admin extends Model {}

module.exports = Admin;

// module.exports = async (sequelize) => {

//     Admin.init({
//         username: DataTypes.STRING,
//         password: DataTypes.STRING
//     }, { sequelize, modelName: 'admin'});

// }