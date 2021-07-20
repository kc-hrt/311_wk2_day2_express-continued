const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments')

router.get('/comments', commentsController.list) // get list
router.get('/comments/:id', commentsController.show) // get single item
router.post('/comments', commentsController.create) // create a new item

module.exports = router