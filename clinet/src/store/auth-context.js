import React, { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
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
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const signup = async (username, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, { displayName: username });
    return user;
  };

  const login = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // setCurrentUser({
        //   username: user.email,
        //   email: user.email,
        //   userId: user.uid,
        // });
      } else {
      }
    });
  }, []);

  const contextValue = {
    signup: signup,
    token: token,
    currentUser: currentUser,
    isLoggedIn: userIsLoggedIn,
    login: login,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
