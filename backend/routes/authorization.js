const router = require('express').Router();
const { login, createUser, signOut } = require('../controllers/users');
const { validateRegistration, validateLogin } = require('../middlewares/reqValidation');

router.post('/signin', validateLogin, login);

router.post('/signup', validateRegistration, createUser);

router.get('/signout', signOut);

module.exports = router;
