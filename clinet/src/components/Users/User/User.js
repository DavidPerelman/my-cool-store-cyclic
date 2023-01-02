import React, { useEffect, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import classes from './User.module.css';

const User = ({ onCloseUserStatus, setUserStatusIsShown }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [userData, setUserData] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredLoginEmail, setEnteredLoginEmail] = useState('');
  const [enteredLoginPassword, setEnteredLoginPassword] = useState('');

  const [enteredRegisterFirstName, setEnteredRegisterFirstName] = useState('');
  const [enteredRegisterLastName, setEnteredRegisterLastName] = useState('');
  const [enteredRegisterEmail, setEnteredRegisterEmail] = useState('');
  const [enteredRegisterPassword, setEnteredRegisterPassword] = useState('');
  const [enteredRegisterConfirmPassword, setEnteredRegisterConfirmPassword] =
    useState('');

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
  };

  const onLoginHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: enteredLoginEmail,
      password: enteredLoginPassword,
    };

    setUserStatusIsShown(false);
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    setIsLoginPage(false);
    setIsRegisterPage(false);
  };

  const onLogoutHandler = (event) => {
    event.preventDefault();
    console.log('onLogout');
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
            enteredLoginEmail={enteredLoginEmail}
            enteredLoginPassword={enteredLoginPassword}
            setEnteredEmail={setEnteredLoginEmail}
            setEnteredPassword={setEnteredLoginPassword}
            setFormIsValid={setFormIsValid}
          />
        </>
      )}
      {isRegisterPage && (
        <>
          <Register
            goToLogin={goToLogin}
            enteredRegisterFirstName={enteredRegisterFirstName}
            enteredRegisterLastName={enteredRegisterLastName}
            enteredRegisterEmail={enteredRegisterEmail}
            enteredRegisterPassword={enteredRegisterPassword}
            enteredRegisterConfirmPassword={enteredRegisterConfirmPassword}
            setEnteredFirstName={setEnteredRegisterFirstName}
            setEnteredLastName={setEnteredRegisterLastName}
            setEnteredEmail={setEnteredRegisterEmail}
            setEnteredPassword={setEnteredRegisterPassword}
            setEnteredConfirmPassword={setEnteredRegisterConfirmPassword}
            setFormIsValid={setFormIsValid}
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
            <button className={classes.button} disabled={!formIsValid}>
              Login
            </button>
          </form>
        )}
        {isRegisterPage && (
          <form
            className={classes['register-form']}
            onSubmit={onRegisterHandler}
          >
            <button
              className={classes.button}
              type='submit'
              disabled={!formIsValid}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default User;
