import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './Register.module.css';

const Register = ({
  goToLogin,
  setEnteredFirstName,
  setEnteredLastName,
  setEnteredEmail,
  setEnteredPassword,
}) => {
  const firstNameChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <div className={classes.register}>
      <h1>Register</h1>
      <Input
        id='firstname'
        label='First Name'
        type='text'
        onChange={firstNameChangeHandler}
      />
      <Input
        id='lastname'
        label='Last Name'
        type='text'
        onChange={lastNameChangeHandler}
      />
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
      <Input id='confirm-password' label='Confirm Password' type='password' />
      <button onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Register;
