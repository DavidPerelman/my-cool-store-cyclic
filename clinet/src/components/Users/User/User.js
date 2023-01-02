import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';
import classes from './User.module.css';

const User = ({ onCloseUserStatus }) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const goToRegister = () => {
    setIsLoginPage(false);
    setIsRegisterPage(true);
  };

  const goToLogin = () => {
    setIsLoginPage(true);
    setIsRegisterPage(false);
  };

  return (
    <Modal onClose={onCloseUserStatus}>
      {isLoginPage && (
        <>
          <Login goToRegister={goToRegister} />
        </>
      )}
      {isRegisterPage && (
        <>
          <Register goToLogin={goToLogin} />
        </>
      )}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseUserStatus}>
          Close
        </button>
        {isLoginPage && <button className={classes.button}>Login</button>}
        {isRegisterPage && <button className={classes.button}>Register</button>}
      </div>
    </Modal>
  );
};

export default User;
