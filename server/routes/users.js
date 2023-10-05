const express = require('express')
const Users = require('../models/users')
const router = express.Router();
const usersController = require('../controllers/users')
router.get('/api/userDetails/:id', usersController.getUserDetails)

router.get('/api/home', usersController.getApiHome);
router.get('/api/users', usersController.getApiUsers);

router.post('/api/delete/:id', usersController.postDeleteUser)

router.post('/api/update/:id', usersController.postUpdateUser)

module.exports = router