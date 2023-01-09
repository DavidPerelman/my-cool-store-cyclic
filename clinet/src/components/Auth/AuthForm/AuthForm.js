import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import classes from './AuthForm.module.css';
import { getAuth } from 'firebase/auth';
import LoggedInLayout from '../../Layout/LoggedInLayout/LoggedInLayout';

const AuthForm = ({ onCloseUserModal }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const isLoggedIn = getAuth().currentUser;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredUserName = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    if (isLogin) {
      try {
        const user = await authCtx.login(enteredEmail, enteredPassword);

        console.log(user);
      } catch (error) {
        console.log(error.message);
      }

      setIsLoading(false);
      navigate('/');
      onCloseUserModal();
    } else {
      try {
        const user = await authCtx.signup(
          enteredUserName,
          enteredEmail,
          enteredPassword
        );

        navigate('/');
        onCloseUserModal();
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    }
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
      {isLoggedIn && <LoggedInLayout onCloseUserModal={onCloseUserModal} />}
    </section>
  );
};

export default AuthForm;
