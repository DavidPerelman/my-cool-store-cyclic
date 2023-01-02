import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './Login.module.css';

const Login = ({ goToRegister, setEnteredEmail, setEnteredPassword }) => {
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <div className={classes.login}>
      <h2>Login</h2>
      <form className={classes['login-form']}>
        <Input
          id='email'
          label='E-Mail'
          type='email'
          onChange={emailChangeHandler}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          onChange={passwordChangeHandler}
        />
      </form>
      <p>
        Don't have an account?
        <span onClick={goToRegister} className={classes['have-acount-span']}>
          {' '}
          Sign Up
        </span>
        .
      </p>
    </div>
  );
};

export default Login;
