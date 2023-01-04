const router = require('express').Router();
const {
  getAllProducts,
  deleteAllProducts,
  getAllProductsByCategoryId,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:categoryId', getAllProductsByCategoryId);
router.get('/delete', deleteAllProducts);

module.exports = router;
