import React from 'react';

const Login = ({ goToRegister }) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
};

export default Login;
