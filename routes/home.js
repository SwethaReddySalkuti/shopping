const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const cartController = require('../controllers/cartController')
router.get('/',homeController.getHomePage);
router.get('/product/details/:productid',homeController.getProductDetailsPage);
router.post('/cart',cartController.postCartPage);
router.get('/cart',cartController.getCartPage);
module.exports=router;