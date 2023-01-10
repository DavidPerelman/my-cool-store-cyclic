import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import UserContext from '../../../store/user-context';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderButtons.module.css';
import { getAuth } from 'firebase/auth';
import NewCartContext from '../../../store/cartContext';

const HeaderButtons = () => {
  const isLoggedIn = getAuth().currentUser;

  const newCartCtx = useContext(NewCartContext);
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const showCartHandler = () => {
    newCartCtx.showCart();
    // cartCtx.showCart();
  };

  const showUserModalHandler = () => {
    userCtx.showUserModal();
  };

  const numOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  // const numOfCartItems = 0;

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
