const Category = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
  try {
    // get all categories
    const categories = await Category.find({});
    res.json({ categories: categories });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

const deleteAllCategories = async (req, res) => {
  try {
    // get all products
    const categories = await Category.deleteMany({});

    res.json({ categories: categories });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

module.exports = { getAllCategories, deleteAllCategories };