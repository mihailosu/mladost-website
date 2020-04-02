const express = require('express');

const authService = require('../../services/auth-service');

/* Log in and Log out functionality */

const route = express.Router();

module.exports = async app => {

    app.use('/auth', route);

    route.post('/signin', async (req, res) => {

        let username = req.body.username;
        let password = req.body.password;

        if (username != undefined && password != undefined){

            authToken = await authService.signIn(username, password);

            if (authToken){
                return res.json({ token: authToken }).status(200);
            }
            else {
                return res.status(401);
            }

        }
        else {
            return res.status(401);
        }

    });

}