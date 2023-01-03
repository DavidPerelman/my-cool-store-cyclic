import { useReducer } from 'react';
import ProductsContext from './products-context';

const defaultProductsState = {
  products: [],
  category: [],
};

const productsReducer = (state, action) => {};

const ProductsProvider = ({ children }) => {
  const [productsState, dispatchProductsAction] = useReducer(
    productsReducer,
    defaultProductsState
  );

  const getAllProductsHandler = (products) => {
    dispatchProductsAction({ type: 'ADD', products: products });
  };

  const getAllCategoriesHandler = (category) => {
    dispatchProductsAction({ type: 'REMOVE', category: category });
  };

  const getAllProductsByCategoryHandler = (products) => {
    dispatchProductsAction({ type: 'REMOVE', products: products });
  };

  const getProductByIdHandler = (products) => {
    dispatchProductsAction({ type: 'REMOVE', products: products });
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
