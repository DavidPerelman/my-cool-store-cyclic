const router = require('express').Router();
const {
  getAllProducts,
  deleteAllProducts,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/delete', deleteAllProducts);

module.exports = router;
