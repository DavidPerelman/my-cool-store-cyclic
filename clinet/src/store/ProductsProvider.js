import { useReducer } from 'react';
import ProductsContext from './products-context';

const defaultProductsState = {
  products: [],
  category: [],
};

const productsReducer = (state, action) => {};

const ProductsProvider = ({}) => {
  const [productsState, dispatchProductsAction] = useReducer(
    productsReducer,
    defaultProductsState
  );

  const getAllProductsHandler = () => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const getAllCategoriesHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const getAllProductsByCategoryHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const getProductByIdHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const productsContext = {
    categories: [],
    products: [],
    getAllProducts: getAllProductsHandler,
    getAllCategories: getAllCategoriesHandler,
    getAllProductsByCategory: getAllProductsByCategoryHandler,
    getProductById: getProductByIdHandler,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
