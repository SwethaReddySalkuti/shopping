const express = require('express');
const router = express.Router();
const productController = require('../controllers/admin/productController');
const { getAdminProductsPage } = require('../controllers/homeController');
router.get('/',getAdminProductsPage);
router.get('/add',productController.getAddProductPage);
router.post('/add',productController.postAddProductPage);
router.get('/edit/:productid',productController.getEditProductPage);
router.post('/edit/:productid',productController.postEditProductPage);
router.post('/delete',productController.postDeleteProductPage);


module.exports=router;
