import classes from './HeaderIcon.module.css';

const HeaderIcon = ({ type, count, amount, onClick, isLoggedIn }) => {
  return (
    <h2>
      <div className={classes.cart} onClick={onClick}>
        {count && <span className={classes.count}>{amount}</span>}
        <i
          className={`fas ${type} fa-lg ${classes.headerIcon} ${
            type === 'fa-user' && isLoggedIn !== null ? classes.isLogin : ''
          }`}
        ></i>
      </div>
    </h2>
  );
};

export default HeaderIcon;
