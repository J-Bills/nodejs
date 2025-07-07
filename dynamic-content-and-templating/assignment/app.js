const express = require('express');
const bodyparser = require('body-parser')


const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add User'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'User'});
});

app.get('/add-user', (req, res, next) => {
    res.redirect('/users');
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        PageTitle: 'Page Not Found',
        path: '' // or use req.url if you want to show the attempted path
    });
});

app.listen(3000, () => {
    console.log('server is listening...')
})