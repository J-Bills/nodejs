const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    const users = ['Bob', 'Alice', 'Steve'];
    const values = JSON.stringify(users);
    res.send(values);
});

app.use('/', (req, res, next) => {
    console.log('Middleware 2');
    res.send(
        '<h1>This is another page!</h1>'
    );
});

app.listen(3000);