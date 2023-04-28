const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
exports.addProducttoCart = (productid , productPrice) => {
    const cartPath = path.join(rootDir,'data','cart.json');
    fs.readFile(cartPath,(err,cartContent) => {
        let cart = {products:[] , totalPrice: 0};
        if(!err)
        {
            cart = JSON.parse(cartContent);
        }
        let existingProductIndex = cart.products.findIndex((prod) => prod.id.toString() === productid);
        let updatedProduct;
        if(existingProductIndex != -1)
        {
            updatedProduct = {...cart.products[existingProductIndex]};
            updatedProduct.quantity += 1; 
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        }
        else
        {
            updatedProduct = {
                id : productid,
                quantity : 1
            }
            cart.products = [...cart.products,updatedProduct];
        }
        cart.totalPrice += +productPrice;
        fs.writeFile(cartPath,JSON.stringify(cart),(err) => {
            console.log(err);
        }); 
    })
}