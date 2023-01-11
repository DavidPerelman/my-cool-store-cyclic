import React, { useEffect, useContext } from 'react';
import UserProvider from './store/UserProvider';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import Header from './components/Layout/Header/Header';
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage';
import AuthContext from './store/auth-context';
import MyOrders from './pages/MyOrders/MyOrders';
import ProfileDashboard from './pages/ProfileDashboard/ProfileDashboard';
import { CartContextProvider } from './store/cart-context';
import ProductContext, {
  ProductContextProvider,
} from './store/products-context';
import { CategoriesContextProvider } from './store/categories-context';

function App() {
  const authCtx = useContext(AuthContext);
  const productCxt = useContext(ProductContext);

  const isLoggedIn = authCtx.currentUser !== null;

  useEffect(() => {
    authCtx.checkLoggedIn();
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, [authCtx]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} errorElement={<NotFound />} exact />
        <Route
          path='/products/:categoryId'
          element={<CategoryProductsPage />}
          exact
        />
        <Route
          path='/product/:productId'
          element={<ProductDetailsPage />}
          exact
        />
        {isLoggedIn && (
          <Route path='/:userId/my-orders' element={<MyOrders />} />
        )}
        {isLoggedIn && (
          <Route path='/:userId/dashboard' element={<ProfileDashboard />} />
        )}

        <Route path='/*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <CategoriesContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <UserProvider>
            <RouterProvider router={router}></RouterProvider>
          </UserProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </CategoriesContextProvider>
  );
}

export default App;
