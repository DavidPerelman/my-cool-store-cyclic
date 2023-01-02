import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';

const User = ({ onCloseUserStatus }) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const goToRegister = () => {
    setIsLoginPage(false);
    setIsRegisterPage(true);
  };

  const goToLogin = () => {
    setIsLoginPage(true);
    setIsRegisterPage(false);
  };

  return (
    <Modal onClose={onCloseUserStatus}>
      {isLoginPage && (
        <>
          <Login goToRegister={goToRegister} />
        </>
      )}
      {isRegisterPage && (
        <>
          <Register goToLogin={goToLogin} />
        </>
      )}
    </Modal>
  );
};

export default User;
