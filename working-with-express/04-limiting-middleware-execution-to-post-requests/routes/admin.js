const express = require('express');
const bodyParser = require('body-parser');

const router  = express.Router();

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => { // Only triggers for post request
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;