const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

const getAllProducts = async (req, res) => {
  try {
    // get all products
    const products = await Product.find({});
    console.log('products');
    res.json({ products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

const getAllProductsByCategoryId = async (req, res) => {
  console.log(req);
  try {
    const categoryId = req.params.categoryId;

    // get all products by category
    const category = await Category.findById({
      _id: categoryId,
    }).exec();

    const products = await Product.find({
      category: category.name,
    }).limit(4);

    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    // get all products
    const products = await Product.deleteMany({});

    console.log('products');
    res.json({ products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

module.exports = {
  getAllProducts,
  deleteAllProducts,
  getAllProductsByCategoryId,
};
