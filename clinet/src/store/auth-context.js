import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
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

  const checkLoggedIn = async () => {
    const unSubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setCurrentUser(authenticatedUser);
        } else {
          setCurrentUser(null);
        }
      }
    );

    return unSubscribeAuth;
  };

  const signup = async (username, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, { displayName: username });
    return user;
  };

  const login = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser({
      displayName: user.user.displayName,
      email: user.user.email,
      uid: user.user.uid,
    });

    setCurrentUser(user);
    return user;
  };

  const logout = async () => {
    return getAuth().signOut();
  };

  const contextValue = {
    checkLoggedIn: checkLoggedIn,
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
