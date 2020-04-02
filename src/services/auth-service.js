const jwt = require('jsonwebtoken');
const argon2 = require('argon2'); // Password hasher

const adminModel = require('../models/admin');
const config = require('../config');

class AuthService{

    async signIn(usr, pass) {

        let admin = await adminModel.findOne({
            limit: 1,
            where: {
                username: usr
            }
        });

        if (!admin) 
            return null;

        // Argon2 prevents "Timing Based Attacks"
        const validPassword = await argon2.verify(admin.password, pass);
        
        if (validPassword){

            const token = this.generateToken(admin.id);

            return token;

        }
        else {
            console.log("Invalid password for user " + admin.username);
            return null;
        }

    }

    generateToken(userId) {
        let now = new Date();
        // Token expires in an hour
        let exp = new Date(now.getTime() + 60 * 1000); 

        console.log("Expires at: " + exp);

        return jwt.sign(
            {
                _id: userId,
                exp: exp.getTime()
            },
            config.jwtSecret
        );
    }

}

module.exports = new AuthService();