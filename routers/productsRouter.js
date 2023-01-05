const router = require('express').Router();
const {
  getAllProducts,
  getSingleProduct,
  deleteAllProducts,
  getAllProductsByCategoryId,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/product/:productId', getSingleProduct);
router.get('/:categoryId', getAllProductsByCategoryId);
router.get('/delete', deleteAllProducts);

module.exports = router;
