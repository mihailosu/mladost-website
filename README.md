# Club Mladost Website

This website backend is built using the express framework. It allows users to browse through upcoming events in Club Mladost.

Admins can log in and post/remove events and notifications on the website. Authentication is performed using **JWT**.

All of the models are defined using an **ORM library (sequelize)** and tables created in the **PostgreSQL database**.

**Environment variables** such as the *database connection URI*, *token secret*  and *port* are stored in the .env file and loaded in using the **dotenv** package.

## Project structure 

```
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── api 
    │   ├── index.js
    │   ├── middleware
    │   │   ├── isAuth.js               Token authentication
    │   │   └── isExpired.js            Token expiration check
    │   └── routes
    │       ├── auth.js                 Authentication route
    │       ├── events.js               Events route
    │       ├── genres.js               Genres route
    │       └── notifications.js        Notificaitons route
    ├── config
    │   └── index.js                    Export .env as an object
    ├── index.js
    ├── loaders                     
    │   ├── database.js                 The database initializer
    │   ├── express.js                  Express initializer
    │   └── index.js
    ├── models                          Entity models
    │   ├── admin.js                
    │   ├── event-genre.js
    │   ├── event.js
    │   ├── genre.js
    │   └── notification.js
    └── services
        ├── auth-service.js             Credential verification and token generation.
        ├── event-service.js            |
        ├── genre-service.js            | Necessary CRUD operations
        └── notification-service.js     |
```