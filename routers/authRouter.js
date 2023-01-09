const router = require('express').Router();
const { createNewUser } = require('../controllers/authController');

router.post('/createUser', createNewUser);

module.exports = router;
