// const products = [];
// Creating a product model to use with the controllers

const fs = require('fs');
const path = require('path');
// making the file path global so that we can use the helper function in both of our class methods
const p = path.join((__dirname), '../data', 'products.json');
// Creating a helper function to help with grabbing file content
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) =>{
        if (!err){
            cb(JSON.parse(fileContent));
        } else {
            cb([]);
        }
    });
};
module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        // adding the file path and reading the file that we want to save to
        // if there is no error(data exists in the file) then we parse the content in it
        // then we add out object to the product array and write the file
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    // static makes sure that I can call this method on the class itself and not just the object
    // adding the file path and reading the file that we want to save to
    // if there is no error(data exists in the file) then we parse the content in it and return it
    // else we return an empty array
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
};