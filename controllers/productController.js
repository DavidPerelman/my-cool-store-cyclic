const Product = require('../models/productModel');

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

module.exports = { getAllProducts };
