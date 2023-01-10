const router = require('express').Router();
const {
  createNewUser,
  loginUser,
  checkLoggedIn,
} = require('../controllers/authController');
const { authMiddlware } = require('../middleware/auth-middleware');

router.post('/createUser', createNewUser);
router.post('/loginUser', loginUser);
router.post('/checkLoggedIn', authMiddlware, checkLoggedIn);

module.exports = router;
