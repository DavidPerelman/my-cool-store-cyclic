import React, { Fragment, useContext } from 'react';
import Home from '../../../pages/Home/Home';
import CartContext from '../../../store/cart-context';
import UserContext from '../../../store/user-context';
import Cart from '../../Cart/Cart/Cart';
import User from '../../Users/User/User';
import Header from '../Header/Header';

const Layout = (props) => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const closeCartHandler = () => {
    cartCtx.hideCart();
  };

  const closeUserModalHandler = () => {
    userCtx.hideUserModal();
  };

  return (
    <Fragment>
      {cartCtx.show && <Cart onCloseCart={closeCartHandler} />}
      {userCtx.isUserModalShown && (
        <User onCloseUserModal={closeUserModalHandler} />
      )}
      <Header />
      <main>{props.children}</main>
      <footer style={{ backgroundColor: 'red' }}>footer</footer>
    </Fragment>
  );
};

export default Layout;
