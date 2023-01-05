import React from 'react';

const UserContext = React.createContext({
  show: false,
  showUserModal: () => {},
  hideUserModal: () => {},
  user: {},
  isLoggedIn: false,
  login: (userData) => {},
  register: (newUserData) => {},
  logout: () => {},
});

export default UserContext;
