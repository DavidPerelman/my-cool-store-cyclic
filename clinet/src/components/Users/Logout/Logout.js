import React from 'react';
import Button from '../../UI/Button/Button';
import './Logout.css';

const Logout = ({ userData, onLogout }) => {
  return (
    <div className='logout'>
      <h2>
        Hello {userData.firstName} {userData.lastName}!
      </h2>
      <Button>Edit My Profile</Button>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
  //   return <div>{userData.firstName}</div>;
};

export default Logout;
