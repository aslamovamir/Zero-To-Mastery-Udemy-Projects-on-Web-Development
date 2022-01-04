const express = require('express');
// body-parser library to be able to read body json data
const bodyParser = require('body-parser');


const app = express();
//middleware
app.use(bodyParser.json())

// let's create a variable to simulate the functionality of a database
const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date() //a timestamp to be generated whenever a user is created
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

// basic route
app.get('/', (req, res) => {
    res.send(database.users);
});

// sign in route
//instead of a send method, we can use json method to send the data in JSON format
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
            res.json('success');
        } else {
            res.status(400).json('error logging in');
        }
});

// a new user is created
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length-1]);
});

//":id" sytax will allow anything to be typed to be access through params property
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            res.json(user);
        } 
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

//image route
app.post('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            res.json(user.entries);
        } 
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
});



// we use the POST command instead of GET in signin because of security concerns
// we want to send the user credentials encoded insed the body of a request
/*
    / --> res = this is working
    /signin --> POST = sucess/fail
    /register --> POST = user
    /profile/:userID --> GET = user
    /image --> PUT = user

*/
