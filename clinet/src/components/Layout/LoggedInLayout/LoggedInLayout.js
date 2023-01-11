import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import UserContext from '../../../store/user-context';
import Button from '../../UI/Button/Button';
import classes from './LoggedInLayout.module.css';

const LoggedInLayout = ({ onCloseUserModal }) => {
  const userCtx = useContext(UserContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const onEditProfileHandler = () => {
    userCtx.hideUserModal();
    navigate(`/:userId/dashboard`);
  };

  const onLogoutHandler = () => {
    authCtx.logout();
    userCtx.hideUserModal();

    navigate(`/`);
  };

  const username = authCtx.currentUser.displayName;

  return (
    <div className={classes.LoggedInLayout}>
      <h1>Hello {username !== null ? username : ''}!</h1>
      <Button
        onClick={onEditProfileHandler}
        className={classes.button}
        background='#540d83'
        color='white'
      >
        Profile Setting
      </Button>
      <Button
        className={classes.button}
        background='#540d83'
        color='white'
        onClick={onLogoutHandler}
      >
        Logout
      </Button>
      <Button
        className={classes.button}
        background='#540d83'
        color='white'
        onClick={onCloseUserModal}
      >
        Close
      </Button>
    </div>
  );
};

export default LoggedInLayout;
