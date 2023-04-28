const cartModel = require('../model/cart');
const productModel = require('../model/product');
exports.postCartPage = (req,res) => {
    const productid = req.body.productid;
    console.log(productid);
    productModel.getProductById(productid ,(product) => {
        console.log(productid);
        cartModel.addProducttoCart(productid,product.price);
        res.redirect('/');
    })
}
exports.getCartPage = (req,res) => {

}