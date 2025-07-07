const express = require('express');
const bodyParser = require('body-parser');



const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Add User'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'User',
        users: users
    });
});

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '' // or use req.url if you want to show the attempted path
    });
});

app.listen(3000, () => {
    console.log('server is listening...')
})