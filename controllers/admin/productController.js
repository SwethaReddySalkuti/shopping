const productsData = require('../../model/product');
exports.getAddProductPage = (req,res,next) => {
    const viewsData = {
        edit: false,
        pageTitle : 'Add Product'
    }
    res.render('addproduct',viewsData);
}
exports.postAddProductPage = (req,res,next) => {
    const product = {
        id : Date.now(),
        title : req.body.title,
        price : req.body.price
    }
    productsData.saveProduct(product);
    res.redirect('/');
}
exports.getEditProductPage = (req,res,next) => {
    const productid = req.params.productid;
    productsData.getProductById(productid ,product => {
        console.log(product.price);
        const viewsData = {
            edit : true,
            product,
            pageTitle : 'Edit Product'
        }
        res.render('addproduct',viewsData);
    })
    
    
}
exports.postEditProductPage = (req,res,next) => {
    const product =
    {
        id : req.body.productid,
        title : req.body.title,
        price : req.body.price
    };
    productsData.updateProductById(product,req.body.productid);
    res.redirect('/products');
}
exports.postDeleteProductPage = (req,res,next) => {
    productsData.deleteProductById(req.body.productid ,() => {
        res.redirect('/products'); 
    });
      
}
