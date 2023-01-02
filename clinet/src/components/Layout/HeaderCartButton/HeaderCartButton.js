import React, { Fragment } from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart, onShowUserStatus }) => {
  return (
    <>
      <div className={classes.HeaderCartButton}>
        <HeaderIcon
          type='fa-shopping-cart'
          count={true}
          amount={4}
          onClick={onShowCart}
        />
        <HeaderIcon type='fa-user' onClick={onShowUserStatus} />
      </div>
    </>
  );
};

export default HeaderCartButton;
