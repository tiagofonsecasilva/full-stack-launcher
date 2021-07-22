const mongoose = require('mongoose');
const User = require('../models/User.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/backend";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const users = [
    {   
        "name": "Dalthon",
        "lastname": "Mamani",
        "username": "D4ITON",
        "password": "$2a$10$hhn8vSvl6rpv42undbkQ.O5XIdIJkujyqQWqKIxRJgLQYCGlM/6rW",
        "role": "admin"
    },
    {   
        "name": "Juan",
        "lastname": "Pérez",
        "username": "JU4N",
        "password": "$2a$10$hhn8vSvl6rpv42undbkQ.O5XIdIJkujyqQWqKIxRJgLQYCGlM/6rW",
        "role": "user"
    },
    {   
        "name": "Marta",
        "lastname": "López",
        "username": "Marta",
        "password": "$2a$10$hhn8vSvl6rpv42undbkQ.O5XIdIJkujyqQWqKIxRJgLQYCGlM/6rW",
        "role": "visitor"
    }
];

User.create(users)
    .then(usersFromDB => {
        console.log(`Created ${usersFromDB.length} users`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating users from the DB: ${err}`));

