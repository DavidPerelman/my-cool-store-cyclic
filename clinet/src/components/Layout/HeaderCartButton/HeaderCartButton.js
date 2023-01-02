import React, { Fragment, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart, onShowUserStatus }) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  const numOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <>
      <div className={classes.HeaderCartButton}>
        <HeaderIcon
          type='fa-shopping-cart'
          count={true}
          amount={numOfCartItems}
          onClick={onShowCart}
        />
        <HeaderIcon type='fa-user' onClick={onShowUserStatus} />
      </div>
    </>
  );
};

export default HeaderCartButton;
