// routes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Get all items
router.get('/items', itemController.getItems);

// Create a new item
router.post('/items', itemController.createItem);

// Update an item
router.put('/items/:id', itemController.updateItem);

// Delete an item
router.delete('/items/:id', itemController.deleteItem);


// Item get by id
router.get('/items/:id', itemController.getItemById);

module.exports = router;
