const path = require('path');
const rootDir = require('../helpers/path');
const express = require('express');

const router = express.Router();

router.get('/home', (req, res, next) => {
    // got an error when trying to run this saying that res.sendFile requires an aboslute path
    // res.sendFile('../views/shop.html');
    // so now we have to use the path module to solve this
    // this joins the paths on the filesystem and makes sure that it works on all os'
    // we have to add the path piece by piece and since views is a sibling of the routes folder we have to add ../ also
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); //Including the rootDir from helper/path so that we don't have to directly access the directory name
});

module.exports = router;