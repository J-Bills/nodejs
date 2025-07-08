// const products = [];
// Creating a product model to use with the controllers

const fs = require('fs');
const path = require('path');
module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        // adding the file path and reading the file that we want to save to
        // if there is no error(data exists in the file) then we parse the content in it
        // then we add out object to the product array and write the file
        const p = path.join((__dirname), '../data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err){
                products = JSON.parse(fileContent);
            }
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
        const p = path.join((__dirname), '../data', 'products.json');
        fs.readFile(p, (err, fileContent) =>{
            if (!err){
                cb(JSON.parse(fileContent));
            }
            cb([]);
        });
    }
};