import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchCategory } from '../api/categoriesApi';

const useCategoriesQuery = (categoryId) => {
  console.log(categoryId);
  const category = useQuery(['category', categoryId], () => {
    const result = fetchCategory(categoryId);
    return result;
  });
  return category;
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

export default useCategoriesQuery;
