import React, { useEffect, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import classes from './User.module.css';

const User = ({ onCloseUserStatus }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [userData, setUserData] = useState({});

  const [enteredLoginEmail, setEnteredLoginEmail] = useState('');
  const [enteredLoginPassword, setEnteredLoginPassword] = useState('');

  const [enteredRegisterFirstName, setEnteredRegisterFirstName] = useState('');
  const [enteredRegisterLastName, setEnteredRegisterLastName] = useState('');
  const [enteredRegisterEmail, setEnteredRegisterEmail] = useState('');
  const [enteredRegisterPassword, setEnteredRegisterPassword] = useState('');

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    console.log(storedUserLoggedInInformation);
    if (storedUserLoggedInInformation === '1') {
      setUserData({
        firstName: 'David',
        lastName: 'Perelman',
      });

      setIsLoginPage(false);
      setIsRegisterPage(false);
      setIsLoggedIn(true);
    }
  }, []);

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
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const onLogoutHandler = (event) => {
    event.preventDefault();
    console.log('onLogout');
    // return;
    localStorage.removeItem('isLoggedIn');

    setIsLoginPage(true);
    setIsRegisterPage(false);
    setIsLoggedIn(false);
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
      {isLoggedIn && (
        <>
          <Logout userData={userData} onLogout={onLogoutHandler} />
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
