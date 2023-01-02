import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, id, value, onChange, onBlur, isValid, label }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input
        // ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
