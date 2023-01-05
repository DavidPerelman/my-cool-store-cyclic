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
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import CartContext from './store/cart-context';
import UserContext from './store/user-context';
import Layout from './components/Layout/Layout/Layout';
import Header from './components/Layout/Header/Header';

function App() {
  useEffect(() => {
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home />} errorElement={<NotFound />} exact />
  //       <Route path='/product/:productId' element={<ProductDetails />} exact />
  //       <Route path='/*' element={<NotFound />} />
  //     </Route>
  //   )
  // );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} errorElement={<NotFound />} exact />
        <Route path='/product/:productId' element={<ProductDetails />} exact />
        <Route path='/*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>

        {/* <Layout>

        </Layout> */}
      </UserProvider>
    </CartProvider>
  );
}

export default App;
