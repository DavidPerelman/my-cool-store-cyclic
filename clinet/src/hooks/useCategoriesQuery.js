import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchCategories, fetchCategory } from '../api/categoriesApi';

const useCategoryTitleQuery = (categoryId) => {
  console.log(categoryId);
  const category = useQuery(['category', categoryId], () => {
    const result = fetchCategory(categoryId);
    return result;
  });
  return category;
};

const useCategoriesQuery = () => {
  const categories = useQuery(['categories'], () => {
    const result = fetchCategories();
    return result;
  });
  return categories;
};

// const useOrder = (orderId) => {
//   const session = useContext(Context);
//   const token = session.storedValue.token;
//   const order = useQuery(['order', token, orderId], () => {
//     const result = getOrderDetails(token, orderId);
//     return result;
//   });

//   return order;
// };

export default (useCategoryTitleQuery, useCategoriesQuery);
