import React from 'react';

const ProductsContext = React.createContext({
  categories: [],
  products: [],
  getAllProducts: () => {},
  getAllCategories: () => {},
  getAllProductsByCategory: (item) => {},
  getProductById: (id) => {},
});

export default ProductsContext;
