# Club Mladost Website

This website backend is built using the express framework. It allows users to browse through upcoming events in Club Mladost.

Admins can log in and post/remove events and notifications on the website. Authentication is performed using **JWT**.

All of the models are defined using an **ORM library (sequelize)** and tables created in the **PostgreSQL database**.

**Environment variables** such as the *database connection URI*, *token secret*  and *port* are stored in the .env file and loaded in using the **dotenv** package.