import React, { useEffect, useState, useContext } from 'react';
import Cart from './components/Cart/Cart/Cart';
import CategoryContainer from './components/Layout/CategoryContainer/CategoryContainer';
import Header from './components/Layout/Header/Header';
import User from './components/Users/User/User';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';

import Router from './Router';

function App() {
  const cartCtx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [userStatusIsShown, setUserStatusIsShown] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fetch('https://dummyjson.com/products/categories')
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));

    fetch('api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));

    // fetch('api/products')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showUserStatusHandler = () => {
    setUserStatusIsShown(true);
  };

  const hideUserStatusHandler = () => {
    setUserStatusIsShown(false);
  };

  return (
    <CartProvider>
      {cartCtx.show && <Cart onCloseCart={hideCartHandler} />}
      <Router />
      {/* {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      {userStatusIsShown && (
        <User
          onCloseUserStatus={hideUserStatusHandler}
          setUserStatusIsShown={setUserStatusIsShown}
        />
      )}

      <Header
        onShowCart={showCartHandler}
        onHideCart={hideCartHandler}
        onShowUserStatus={showUserStatusHandler}
        onHideUserStatus={hideUserStatusHandler}
      />
      <div
        id='categoriesContainers'
        style={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {categories.map((category, i) => {
          return <CategoryContainer key={i} category={category} />;
        })}
      </div> */}
    </CartProvider>
  );
}

export default App;
