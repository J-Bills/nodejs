const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setting view engine up using express functions
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

// Changed to render to uses views instead of pulling html page directly
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
});


app.listen(3000, () => {
    console.log('starting server...');
});