import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import UserContext from '../../../store/user-context';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderButtons.module.css';

const HeaderButtons = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const showCartHandler = () => {
    cartCtx.showCart();
  };

  const showUserModalHandler = () => {
    userCtx.showUserModal();
  };

  const numOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;

  return (
    <div className={classes.HeaderButtons}>
      <HeaderIcon
        className={btnClasses}
        type='fa-shopping-cart'
        count={true}
        amount={numOfCartItems}
        onClick={showCartHandler}
      />
      <HeaderIcon type='fa-user' onClick={showUserModalHandler} />
    </div>
  );
};

export default HeaderButtons;
