import React, { createContext, useState, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import UserContext from './user-context';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  currentUser: null,
  signup: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const userCtx = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  // console.log(userCtx.hideUserModal());
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
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, { displayName: username });

        setCurrentUser({
          displayName: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
        });

        setCurrentUser(user);
      })
      .catch((err) => {
        setError('Signup error!');
        clearError();
      });
  };

  const login = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        setCurrentUser({
          displayName: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
        });

        setCurrentUser(user);
      })
      .catch((err) => {
        setError('Login error!');
        clearError();
      });
  };

  const logout = async () => {
    return getAuth().signOut();
  };

  const contextValue = {
    checkLoggedIn: checkLoggedIn,
    signup: signup,
    currentUser: currentUser,
    error: error,
    login: login,
    logout: logout,
    clearError: clearError,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
