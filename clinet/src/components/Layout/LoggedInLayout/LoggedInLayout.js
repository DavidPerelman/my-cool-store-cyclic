import React, { useState } from 'react';
import ProfileForm from '../../Auth/ProfileForm/ProfileForm';
import Logout from '../../Users/Logout/Logout';
import classes from './LoggedInLayout.module.css';

const LoggedInLayout = () => {
  const [isEditProfile, setIsEditProfile] = useState(true);

  console.log('LoggedInLayout');
  return (
    <div>
      {isEditProfile && <ProfileForm setIsEditProfile={setIsEditProfile} />}
      <Logout />
    </div>
  );
};

export default LoggedInLayout;
