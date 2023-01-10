import React, { useContext } from 'react';
import ProfileForm from '../../components/Auth/ProfileForm/ProfileForm';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import AuthContext from '../../store/auth-context';
import classes from './ProfileDashboard.module.css';

const ProfileDashboard = () => {
  const authCtx = useContext(AuthContext);

  let user;
  let content;

  if (authCtx.currentUser === undefined) {
    content = <LoadingSpinner />;
  } else {
    user = {
      userName: authCtx.currentUser.displayName,
      email: authCtx.currentUser.email,
    };
    content = (
      <>
        <h1 className={classes.userGreeting}>Hello, {user.userName}!</h1>
        <ProfileForm />
      </>
    );
  }

  return <div className={classes.ProfileDashboard}>{content}</div>;
};

export default ProfileDashboard;
