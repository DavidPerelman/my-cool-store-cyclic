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

  const onRegisterHandler = (event) => {
    event.preventDefault();
    console.log('onRegisterHandler');
  };

  const onLoginHandler = (event) => {
    event.preventDefault();
    console.log('onLoginHandler');
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
          <Register
            onRegisterHandler={onRegisterHandler}
            goToLogin={goToLogin}
          />
        </>
      )}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseUserStatus}>
          Close
        </button>
        {isLoginPage && (
          <form className={classes['login-form']} onSubmit={onLoginHandler}>
            <button className={classes.button}>Login</button>
          </form>
        )}
        {isRegisterPage && (
          <form
            className={classes['register-form']}
            onSubmit={onRegisterHandler}
          >
            <button className={classes.button} type='submit'>
              Register
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default User;
