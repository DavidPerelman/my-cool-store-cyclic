import React from 'react';
import './Input.css';

const Input = ({ type, id, value, onChange, onBlur, isValid, label }) => {
  return (
    <div className='input'>
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
