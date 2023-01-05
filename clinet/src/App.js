import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} errorElement={<NotFound />} exact />
        <Route path='/product/:productId' element={<ProductDetails />} exact />
        <Route path='/*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <CartProvider>
        <UserProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;
