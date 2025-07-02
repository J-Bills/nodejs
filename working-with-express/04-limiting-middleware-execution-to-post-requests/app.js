const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./helpers/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Have to setup new middleware inorder to be able to link stylesheet to our code which is a static file
app.use(express.static(path.join(rootDir, 'public')));

//Adding Filtering so that express triggers routes that we specifically want
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

//setting a default route that will be our 404 page
app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
