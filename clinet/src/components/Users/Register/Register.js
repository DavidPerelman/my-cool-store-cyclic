import React from 'react';

const Register = ({ goToLogin }) => {
  return (
    <div>
      <h1>Register</h1>
      <button onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Register;
