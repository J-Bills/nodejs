const express = require('express');
const path = require('path');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(3000);