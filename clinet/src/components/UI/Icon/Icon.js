import classes from './Icon.module.css';

const Icon = ({ size, type, count, amount, onClick }) => {
  return (
    <>
      <>
        <div className={classes.icon} onClick={onClick}>
          {count && <span className={classes.count}>{amount}</span>}
          <i className={`${type} fa-${size} ${classes.headerIcon}`}></i>
        </div>
      </>
    </>
  );
};

export default Icon;
