const router = require('express').Router();

const authController = require('./auth/apicontroller');

router.post('/register', authController.Register);

module.exports = router