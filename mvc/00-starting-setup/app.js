const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Adding the errorController that we exported
const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.error404);

app.listen(3000), ()  => {
  console.log('server is listening...');
};
