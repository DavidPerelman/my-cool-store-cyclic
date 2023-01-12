import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchAllProductsByCategory } from '../api/productsApi';

const useProductsQuery = (categoryId) => {
  const products = useQuery(['products', categoryId], () => {
    const result = fetchAllProductsByCategory(categoryId);
    return result;
  });
  return products;
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

export default useProductsQuery;
