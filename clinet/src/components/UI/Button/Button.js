import React from 'react';
import classes from './Button.module.css';

const Button = ({ onClick, children, color, size, style }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classes[`${style}`]}`}
      style={{ backgroundColor: `${color}`, width: `${size}` }}
    >
      {children}
    </button>
  );
};

export default Button;
