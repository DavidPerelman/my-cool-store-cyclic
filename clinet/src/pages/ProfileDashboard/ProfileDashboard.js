import React from 'react';
import ProfileForm from '../../components/Auth/ProfileForm/ProfileForm';
import classes from './ProfileDashboard.module.css';

const ProfileDashboard = () => {
  return (
    <div className={classes.ProfileDashboard}>
      ProfileDashboard
      <ProfileForm />
    </div>
  );
};

export default ProfileDashboard;
