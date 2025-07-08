// importing our Product class in the models folder
const Product = require('../models/product');

//Creating a function to seperate our add-product code and export to link it to our routes
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // creating a product object and storing the title into it
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    //removing products because we have access to it in this controller file
    // const products = adminData.products;
    // using call back function to populate our products because fetchAll is asynchronous and doesn't return anything
    Product.fetchAll(products =>{
        res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
        });
    });
    
};
