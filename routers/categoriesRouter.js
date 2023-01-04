const router = require('express').Router();
const { getAllCategories } = require('../controllers/categoriesController');

router.get('/', getAllCategories);

module.exports = router;
