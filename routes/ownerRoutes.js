// import express
const express = require('express');

// create router
const router = express.Router();

// import controller proprietari
const OwnersController = require('../controllers/OwnersController')

// show owner route
router.get('/', OwnersController.show)

// store owner route
router.post('/new', OwnersController.store)

module.exports = router;