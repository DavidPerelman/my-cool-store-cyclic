import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';
import classes from './User.module.css';

const User = ({ onCloseUserStatus }) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const [enteredLoginEmail, setEnteredLoginEmail] = useState('');
  const [enteredLoginPassword, setEnteredLoginPassword] = useState('');

  const [enteredRegisterFirstName, setEnteredRegisterFirstName] = useState('');
  const [enteredRegisterLastName, setEnteredRegisterLastName] = useState('');
  const [enteredRegisterEmail, setEnteredRegisterEmail] = useState('');
  const [enteredRegisterPassword, setEnteredRegisterPassword] = useState('');

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

    const registerData = {
      firstName: enteredRegisterFirstName,
      lastName: enteredRegisterLastName,
      email: enteredRegisterEmail,
      password: enteredRegisterPassword,
    };

    console.log(registerData);
  };

  const onLoginHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: enteredLoginEmail,
      password: enteredLoginPassword,
    };

    console.log(loginData);
  };

  return (
    <Modal onClose={onCloseUserStatus}>
      {isLoginPage && (
        <>
          <Login
            goToRegister={goToRegister}
            setEnteredEmail={setEnteredLoginEmail}
            setEnteredPassword={setEnteredLoginPassword}
          />
        </>
      )}
      {isRegisterPage && (
        <>
          <Register
            goToLogin={goToLogin}
            setEnteredFirstName={setEnteredRegisterFirstName}
            setEnteredLastName={setEnteredRegisterLastName}
            setEnteredEmail={setEnteredRegisterEmail}
            setEnteredPassword={setEnteredRegisterPassword}
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
