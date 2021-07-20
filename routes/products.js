const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')

router.get('/products', productsController.list) // get list
router.get('/products/:id', productsController.show) // get single item
router.post('/products', productsController.create) // create a new item

module.exports = router