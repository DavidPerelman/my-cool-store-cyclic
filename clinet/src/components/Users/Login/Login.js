import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './Login.module.css';

const Login = ({
  goToRegister,
  enteredLoginEmail,
  enteredLoginPassword,
  setEnteredEmail,
  setEnteredPassword,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes('@') && enteredLoginPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredLoginEmail.includes('@')
    );
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
