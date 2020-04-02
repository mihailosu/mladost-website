const jwt = require('express-jwt');

const config = require('../../config');

/*
 * Extract the token from the request header
 *
 * Authorization: Bearer TOKEN
 */
const getTokenFromHeader = req => {

    if (req.headers.authorization 
        && req.headers.authorization.split(' ')[0] === 'Bearer')
        {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
}

/*
 * JWTs carry the user id, also an expiration date.
 * So it's very easy to verify them.
 */
const isAuth = jwt({
    secret: config.jwtSecret,
    userProperty: 'token', // Store the token in req.token
    getToken: getTokenFromHeader, // How to extract the token from the header
});

module.exports = isAuth;