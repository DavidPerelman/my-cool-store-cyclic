import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './Register.module.css';

const Register = ({ onRegisterHandler, goToLogin }) => {
  console.log(onRegisterHandler);
  return (
    <div className={classes.register}>
      <h1>Register</h1>
      <Input id='firstname' label='First Name' type='text' />
      <Input id='lastname' label='Last Name' type='text' />
      <Input id='email' label='E-Mail' type='email' />
      <Input id='password' label='Password' type='password' />
      <Input id='confirm-password' label='Confirm Password' type='password' />
      <button onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Register;
