import React, { useEffect, useContext } from 'react';
import UserProvider from './store/UserProvider';
import CartProvider from './store/CartProvider';
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
import AuthContext, { AuthContextProvider } from './store/auth-context';
import MyOrders from './pages/MyOrders/MyOrders';
import ProfileDashboard from './pages/ProfileDashboard/ProfileDashboard';

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

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
        {authCtx.isLoggedIn && (
          <Route path='/:userId/my-orders' element={<MyOrders />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path='/:userId/dashboard' element={<ProfileDashboard />} />
        )}

        <Route path='/*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
