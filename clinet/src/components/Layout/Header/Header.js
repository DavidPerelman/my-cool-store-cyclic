import React, { Fragment } from 'react';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>MyCoolStore</h2>
        <HeaderButtons />
      </header>
    </Fragment>
  );
};

export default Header;
