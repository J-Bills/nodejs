const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

// Used params to get the id and used the Product method to find the matching id
exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findByID(prodID, product =>{
    // rendering our product-details page and passing in the product that we want to render on the view
    res.render('shop/product-detail',{
      product: product,
      pageTitle: 'Product Page',
      path: '/products'
    });
  });
};


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  // get the prodID
  const prodID = req.body.productID;
  console.log(prodID);
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
