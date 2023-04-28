
const productsData = require('../model/product.js');
exports.getHomePage = (req,res) => {
    productsData.fetchAllProducts((products) => {
        const viewsData ={
            admin : false,
            products,
            pageTitle : 'Home Page - Products List'
        }
        res.render('product-list',viewsData);
    })
    
}
exports.getAdminProductsPage = (req,res,next) => {
    productsData.fetchAllProducts((products) => {
        const viewsData = {
            admin : true,
            pageTitle : 'Admin Products',
            products
        }
        res.render('product-list',viewsData)
    })
}
exports.getProductDetailsPage = (req,res) => {
    const productid = req.params.productid;
    productsData.getProductById(productid , product => {
        const viewsData = {
            product,
            pageTitle:'Product Details'
        }
        res.render('productdetails',viewsData);
    });
}