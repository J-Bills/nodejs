// Creating a new controller for errors
exports.error404 = exports.product404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: ''});
};