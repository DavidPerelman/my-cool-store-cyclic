import axios from 'axios';

export const fetchProductsByCategory = async (id) => {
  //   console.log('Fetching products');
  const response = await axios.get(`api/products/${id}`);
  const products = response.data.products;

  //   console.log('Products: ', products);
  return products;
};
