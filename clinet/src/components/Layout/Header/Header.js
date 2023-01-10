import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import NewCartContext from '../../../store/cartContext';
import UserContext from '../../../store/user-context';
import Cart from '../../Cart/Cart/Cart';
import User from '../../Users/User/User';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import classes from './Header.module.css';

const Header = () => {
  const newCartCtx = useContext(NewCartContext);
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const closeCartHandler = () => {
    newCartCtx.hideCart();
    // cartCtx.hideCart();
  };

  const closeUserModalHandler = () => {
    userCtx.hideUserModal();
  };

  return (
    <Fragment>
      {newCartCtx.cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      {/* {cartCtx.show && <Cart onCloseCart={closeCartHandler} />} */}
      {userCtx.isUserModalShown && (
        <User onCloseUserModal={closeUserModalHandler} />
      )}
      <header className={classes.header}>
        <h2>
          <Link to='/' className={classes.linkHeader}>
            MyCoolStore
          </Link>
        </h2>
        <HeaderButtons />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
