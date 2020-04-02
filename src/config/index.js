const dotenv = require('dotenv');

// Read the .env file and add the
// contents to process.env
dotenv.config();

module.exports = {
    port: parseInt(process.env.PORT),
    databaseURI: process.env.POSTGRES_URI,
    jwtSecret: process.env.JWT_SECRET,

}