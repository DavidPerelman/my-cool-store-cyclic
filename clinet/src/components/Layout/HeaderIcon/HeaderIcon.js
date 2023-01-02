import classes from './HeaderIcon.module.css';

const HeaderIcon = ({ type, count, amount, onClick }) => {
  return (
    <h2>
      <div className={classes.cart} onClick={onClick}>
        {count && <span className={classes.count}>{amount}</span>}
        <i className={`fas ${type} fa-lg ${classes.headerIcon}`}></i>
      </div>
    </h2>
  );
};

export default HeaderIcon;
