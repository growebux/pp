const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

// routes/products.route.js

router.post('/create', product_controller.product_create);