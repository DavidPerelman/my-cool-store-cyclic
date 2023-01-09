import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../store/user-context';
import Button from '../../UI/Button/Button';
import Logout from '../../Users/Logout/Logout';
import classes from './LoggedInLayout.module.css';

const LoggedInLayout = ({ onCloseUserModal }) => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const onEditProfileHandler = () => {
    userCtx.hideUserModal();
    navigate(`/:userId/dashboard`);
  };

  return (
    <div>
      <Button
        onClick={onEditProfileHandler}
        className={classes.button}
        background='#540d83'
        color='white'
      >
        Profile Setting
      </Button>
      {/* {isEditProfile && <ProfileForm setIsEditProfile={setIsEditProfile} />} */}
      <Logout />
    </div>
  );
};

export default LoggedInLayout;
