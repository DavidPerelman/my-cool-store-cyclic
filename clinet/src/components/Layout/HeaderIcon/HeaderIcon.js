import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './HeaderIcon.module.css';

const HeaderIcon = ({ type, count, amount, onClick }) => {
  const authCtx = useContext(AuthContext);

  return (
    <h2>
      <div className={classes.cart} onClick={onClick}>
        {count && <span className={classes.count}>{amount}</span>}
        <i
          className={`fas ${type} fa-lg ${classes.headerIcon} ${
            type === 'fa-user' && authCtx.isLoggedIn ? classes.isLogin : ''
          }`}
        ></i>
      </div>
    </h2>
  );
};

export default HeaderIcon;
