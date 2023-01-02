import classes from './Icon.module.css';

const Icon = ({ size, type, count, amount, onClick }) => {
  return (
    <>
      <span>
        <div className={classes.cart} onClick={onClick}>
          {count && <span className={classes.count}>{amount}</span>}
          <i className={`fas ${type} fa-${size} ${classes.headerIcon}`}></i>
        </div>
      </span>
    </>
  );
};

export default Icon;