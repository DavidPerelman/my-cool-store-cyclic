import React, { Fragment } from 'react';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ onShowCart, onShowUserStatus }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>MyCoolStore</h2>
        <HeaderCartButton
          onShowCart={onShowCart}
          onShowUserStatus={onShowUserStatus}
        />
      </header>
    </Fragment>
  );
};

export default Header;
