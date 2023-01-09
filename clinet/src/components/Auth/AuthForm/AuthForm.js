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
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  console.log(usernameInputRef);
  const isLoggedIn = authCtx.isLoggedIn;
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  console.log('check');

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log('isLogin');
    const enteredUserName = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Add validation
    setIsLoading(true);

    if (isLogin) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcSWdXQfnlGw3kIWkAdpXtQ3Gr6Oxo8Hk',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
            // ...
          } else {
            return res.json().then((data) => {
              // show an error modal
              let errorMessage = 'Authentication failed!';
              // if (data && data.error && data.error.message) {
              //   errorMessage = data.error.message;
              //   console.log(data.error);
              // }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data, expirationTime.toISOString());
          // navigate('/');

          if (isLogin) {
            onCloseUserModal();
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      fetch('/api/auth/createUser', {
        method: 'POST',
        body: JSON.stringify({
          userName: enteredUserName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async (res) => {
        const data = await res.json();
        authCtx.login(data);
        setIsLoading(false);
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
            <div
              className={`${classes.control} ${isLogin ? classes.hidden : ''}`}
            >
              <label htmlFor='username'>User Name</label>
              <input type='text' id='username' ref={usernameInputRef} />
            </div>

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
      {/* {isLoggedIn && <LoggedInLayout onCloseUserModal={onCloseUserModal} />} */}
    </section>
  );
};

export default AuthForm;
