const router = require('express').Router();
const {
  getAllCategories,
  deleteAllCategories,
} = require('../controllers/categoriesController');

router.get('/', getAllCategories);
router.get('/delete', deleteAllCategories);

module.exports = router;
