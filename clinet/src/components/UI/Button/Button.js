import React from 'react';
import './Button.css';

const Button = ({ onClick, children, color, size }) => {
  return (
    <button
      onClick={onClick}
      className='button'
      style={{ backgroundColor: `${color}`, width: `${size}` }}
    >
      {children}
    </button>
  );
};

export default Button;
