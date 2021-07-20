const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles')

router.get('/vehicles', vehiclesController.list) // get list
router.get('/vehicles/:id', vehiclesController.show) // get single item
router.post('/vehicles', vehiclesController.create) // create a new item

module.exports = router