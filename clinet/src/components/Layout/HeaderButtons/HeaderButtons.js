import React, { useContext } from 'react';
import UserContext from '../../../store/user-context';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderButtons.module.css';
import { getAuth } from 'firebase/auth';
import CartContext from '../../../store/cart-context';

const HeaderButtons = () => {
  const isLoggedIn = getAuth().currentUser;

  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const showCartHandler = () => {
    cartCtx.showCart();
  };

  const showUserModalHandler = () => {
    userCtx.showUserModal();
  };

  const numOfCartItems = cartCtx.items.length;

  const btnClasses = `${classes.button}`;

  return (
    <div className={classes.HeaderButtons}>
      <HeaderIcon
        className={btnClasses}
        type='fa-shopping-cart'
        count={true}
        amount={numOfCartItems}
        onClick={showCartHandler}
      />
      <HeaderIcon
        type='fa-user'
        onClick={showUserModalHandler}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default HeaderButtons;
