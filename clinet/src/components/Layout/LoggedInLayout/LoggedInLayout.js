import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import UserContext from '../../../store/user-context';
import Button from '../../UI/Button/Button';
import Logout from '../../Users/Logout/Logout';
import classes from './LoggedInLayout.module.css';

const LoggedInLayout = ({ onCloseUserModal }) => {
  const userCtx = useContext(UserContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const onEditProfileHandler = () => {
    userCtx.hideUserModal();
    navigate(`/:userId/dashboard`);
  };

  const onlogoutHandler = () => {
    authCtx.logout();
    navigate(`/`);
  };

  return (
    <div className={classes.LoggedInLayout}>
      <Button
        onClick={onEditProfileHandler}
        className={classes.button}
        background='#540d83'
        color='white'
      >
        Profile Setting
      </Button>
      {/* {isEditProfile && <ProfileForm setIsEditProfile={setIsEditProfile} />} */}
      {/* <Logout /> */}
      <Button
        className={classes.button}
        background='#540d83'
        color='white'
        onClick={onlogoutHandler}
      >
        Logout
      </Button>
    </div>
  );
};

export default LoggedInLayout;
