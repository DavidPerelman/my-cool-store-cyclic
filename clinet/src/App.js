import React, { useEffect } from 'react';
import UserProvider from './store/UserProvider';
import CartProvider from './store/CartProvider';
import Router from './Router';

function App() {
  useEffect(() => {
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  return (
    <CartProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </CartProvider>
  );
}

export default App;
