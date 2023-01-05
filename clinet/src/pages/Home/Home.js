import React, { useContext, useEffect } from 'react';
import Header from '../../components/Layout/Header/Header';
import CartContext from '../../store/cart-context';
import classes from './Home.module.css';
import Cart from '../../components/Cart/Cart/Cart';

const Home = ({ hideCartHandler }) => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log(cartCtx.show);
  }, []);

  return (
    <div>
      {cartCtx.show && <Cart onCloseCart={hideCartHandler} />}
      <Header
      // onShowCart={showCartHandler}
      // onHideCart={hideCartHandler}
      // onShowUserStatus={showUserStatusHandler}
      // onHideUserStatus={hideUserStatusHandler}
      />
    </div>
  );
};

export default Home;
