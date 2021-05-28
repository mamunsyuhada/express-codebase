const router = require('express').Router();

const basicAuth = require('./middleware/basicauth');
const authController = require('./auth/apicontroller');

router.post('/register', basicAuth, authController.Register);

module.exports = router;
