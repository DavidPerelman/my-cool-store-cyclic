import React, { Fragment, useContext, useEffect } from 'react';
import CartContext from '../../../store/cart-context';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart, onShowUserStatus }) => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log(cartCtx.items);
  }, []);

  const showCartHandler = () => {
    cartCtx.showCart();
    console.log(cartCtx);
  };

  const numOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  console.log(numOfCartItems);

  const btnClasses = `${classes.button} ${classes.bump}`;

  return (
    <>
      <div className={classes.HeaderCartButton}>
        <HeaderIcon
          className={btnClasses}
          type='fa-shopping-cart'
          count={true}
          amount={numOfCartItems}
          onClick={showCartHandler}
        />
        {/* <HeaderIcon type='fa-user' onClick={showCartHandler} /> */}
      </div>
    </>
  );
};

export default HeaderCartButton;
