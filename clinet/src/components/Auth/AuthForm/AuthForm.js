import { useContext, useRef, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './AuthForm.module.css';
import { getAuth } from 'firebase/auth';
import LoggedInLayout from '../../Layout/LoggedInLayout/LoggedInLayout';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const AuthForm = ({ onCloseUserModal }) => {
  // const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const isLoggedIn = getAuth().currentUser;
  const [error, setError] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredUserName = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!isLogin) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!regex.test(enteredEmail)) {
        setError('The email address is not valid!');
        clearError();
        return;
      }

      if (enteredUserName === '') {
        setError('User name is required!');
        clearError();
        return;
      }
      if (enteredPassword.length < 7) {
        setError('The password must contain at least 6 characters!');
        clearError();
        return;
      }
    }

    setIsLoading(true);

    if (isLogin) {
      await authCtx.login(enteredEmail, enteredPassword);
      setIsLoading(false);

      if (authCtx.currentUser !== null) {
      }
    } else {
      await authCtx.signup(enteredUserName, enteredEmail, enteredPassword);
      setIsLoading(false);
      console.log(authCtx.currentUser);
    }

    // onCloseUserModal();
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
            {authCtx.error && <p className={classes.error}>{authCtx.error}</p>}
            {/* {error && <p className={classes.error}>{error}</p>} */}
            <div className={classes.actions}>
              {!isLoading && !authCtx.error && (
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
      {isLoggedIn && <LoggedInLayout onCloseUserModal={onCloseUserModal} />}
    </section>
  );
};

export default AuthForm;
