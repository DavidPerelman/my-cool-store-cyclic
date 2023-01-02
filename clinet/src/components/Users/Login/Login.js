import React from 'react';
import Input from '../../UI/Input/Input';
import './Login.css';

const Login = ({ goToRegister }) => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form className='login-form'>
        <Input id='email' label='E-Mail' type='email' />
        <Input id='password' label='Password' type='password' />
      </form>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
};

export default Login;
