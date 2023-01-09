import React, { createContext, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  currentUser: null,
  signup: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = async (username, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, { displayName: username });
    return user;
  };

  const login = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  const logout = async () => {
    return getAuth().signOut();
  };

  const contextValue = {
    signup: signup,
    currentUser: currentUser,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
