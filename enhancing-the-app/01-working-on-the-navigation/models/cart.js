const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

module.exports = class Cart{
    constructor(cart){
        this.cart = cart;
        this.products = [];
    }

    addToCart(product){

    }
    removeFromCart(product){

    }
    
};