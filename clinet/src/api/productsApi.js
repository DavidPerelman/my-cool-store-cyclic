import axios from 'axios';

export const fetchContainerProductsByCategory = async (categoryId) => {
  //   console.log('Fetching product');
  const response = await axios.get(`/api/products/category/${categoryId}/4`);
  const products = response.data.products;

  // console.log('Product: ', products);
  return products;
};

export const fetchProduct = async (productId) => {
  //   console.log('Fetching product');
  const response = await axios.get(`/api/products/product/${productId}`);
  const product = response.data.product;

  //   console.log('Product: ', product);
  return product;
};

export const fetchAllProductsByCategory = async (categoryId) => {
  //   console.log('Fetching product');
  const response = await axios.get(`/api/products/category/${categoryId}`);
  const products = response.data.products;

  // console.log('Product: ', products);
  return products;
};
