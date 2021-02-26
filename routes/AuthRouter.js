var express = require('express');
var router = express.Router();
const { registerView, registerNewUser, loginView, loginUser } = require('../controllers/AuthController');

/* register . */
router.get('/register', registerView);

router.post('/register', registerNewUser);

router.get('/login', loginView);

router.post('/login',loginUser );

module.exports = router;

