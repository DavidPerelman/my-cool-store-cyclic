import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import LoggedInLayout from '../../Layout/LoggedInLayout/LoggedInLayout';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import classes from './AuthForm.module.css';

const AuthForm = ({ onCloseUserModal }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLoggedIn = authCtx.isLoggedIn;
  console.log(onCloseUserModal);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Add validation
    setIsLoading(true);

    if (isLogin) {
    } else {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    // let url;
    // if (isLogin) {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcSWdXQfnlGw3kIWkAdpXtQ3Gr6Oxo8Hk';
    // } else {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcSWdXQfnlGw3kIWkAdpXtQ3Gr6Oxo8Hk';
    // }

    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     returnSecureToken: true,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => {
    //     setIsLoading(false);
    //     if (res.ok) {
    //       return res.json();
    //       // ...
    //     } else {
    //       return res.json().then((data) => {
    //         // show an error modal
    //         let errorMessage = 'Authentication failed!';
    //         // if (data && data.error && data.error.message) {
    //         //   errorMessage = data.error.message;
    //         //   console.log(data.error);
    //         // }
    //         throw new Error(errorMessage);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     const expirationTime = new Date(
    //       new Date().getTime() + +data.expiresIn * 1000
    //     );
    //     authCtx.login(data, expirationTime.toISOString());
    //     // navigate('/');

    //     if (isLogin) {
    //       onCloseUserModal();
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <section className={!isLoggedIn ? classes.auth : classes.authLoggedIn}>
      {!isLoggedIn && (
        <>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor='email'>Your Email</label>
              <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Your Password</label>
              <input
                type='password'
                id='password'
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              {!isLoading && (
                <button>{isLogin ? 'Login' : 'Create Account'}</button>
              )}
              {isLoading && <p>Sending request...</p>}
              <button
                type='button'
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
            </div>
          </form>
        </>
      )}
      {isLoggedIn && <LoggedInLayout />}
    </section>
  );
};

export default AuthForm;
