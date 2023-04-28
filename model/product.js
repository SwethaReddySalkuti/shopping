const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/path');

const getProductsFromFile = (callBack) => {
    const productsPath = path.join(rootDir,'data','products.json');
    fs.readFile(productsPath,(err,productsData) => {
        if(err)
        {
            return callBack([])
        }
        return callBack(JSON.parse(productsData));
    })
}
exports.saveProduct = (product) => {
    const productsPath = path.join(rootDir,'data','products.json');

    getProductsFromFile((productsData) => {
        productsData.push(product);
        fs.writeFile(productsPath, JSON.stringify(productsData),(err) => {
            console.log(err);
        })
    })
}  

exports.fetchAllProducts = (callBack) => {
    getProductsFromFile(callBack);
}
exports.getProductById = (productid , callBack) => {
    getProductsFromFile((products) => {
        const product = products.find(p => p.id.toString() === productid);
        callBack(product);
    })
}
exports.updateProductById = (product,productid) => {
    getProductsFromFile((products) => {
        const productsPath = path.join(rootDir,'data','products.json');
        const existingProductIndex = products.findIndex(prod => prod.id.toString() === productid);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = product;
        fs.writeFile(productsPath,JSON.stringify(updatedProducts) , (err) => {
            console.log(err);
        })
    })
}
exports.deleteProductById = (productid , callBack) => {
    getProductsFromFile((products) => {
        const productsPath = path.join(rootDir,'data','products.json');
        let updatedProducts = products.filter(product => product.id.toString() != productid.toString());
        fs.writeFile(productsPath,JSON.stringify(updatedProducts) , (err) => {
            console.log(err);
        })
        callBack();
    })
}