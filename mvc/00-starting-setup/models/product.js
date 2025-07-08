const products = [];

module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        products.push(this);
    }
    // static makes sure that I can call this method on the class itself and not just the object
    static fetchAll(){
        return products;
    }
};