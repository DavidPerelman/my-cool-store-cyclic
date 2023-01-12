import axios from 'axios';

export const fetchCategories = async () => {
  // console.log('Fetching categories');
  const response = await axios.get('api/categories');
  const categories = response.data;

  // console.log(response.data);

  // console.log('Categories: ', categories);
  return categories;
};
