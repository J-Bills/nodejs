const express = require('express');
const bodyParser = require('body-parser');
const userData = require('./routes/user');



const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.use(userData.router);


app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '' // or use req.url if you want to show the attempted path
    });
});

app.listen(3000, () => {
    console.log('server is listening...')
})