import React, { useContext } from 'react';
import ProfileForm from '../../components/Auth/ProfileForm/ProfileForm';
import AuthContext from '../../store/auth-context';
import classes from './ProfileDashboard.module.css';

const ProfileDashboard = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.userData);
  const userData = localStorage.getItem('user');
  const user = JSON.parse(userData);
  console.log(JSON.parse(userData));

  return (
    <div className={classes.ProfileDashboard}>
      <h1>Hello, {user.userName}!</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfileDashboard;
