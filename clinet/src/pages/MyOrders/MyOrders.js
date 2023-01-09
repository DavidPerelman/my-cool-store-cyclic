import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './MyOrders.module.css';

const MyOrders = () => {
  const authCtx = useContext(AuthContext);

  return <div className={classes.MyOrders}>MyOrders</div>;
};

export default MyOrders;
