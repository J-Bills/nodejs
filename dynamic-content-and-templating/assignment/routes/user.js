const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Add User', path: '/'});
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'User',
        users: users,
        path: '/users'
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

module.exports.router = router;
module.exports.users = users;