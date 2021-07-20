const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts')

router.get('/contacts', contactsController.list) // get list
router.get('/contacts/:id', contactsController.show) // get single item
router.post('/contacts', contactsController.create) // create a new item

module.exports = router