const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;