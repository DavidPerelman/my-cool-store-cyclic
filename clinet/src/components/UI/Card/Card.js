import React from 'react';
import classes from './Card.module.css';

const Card = ({ product }) => {
  return (
    <div className={classes.card}>
      <div>
        <img
          src={product.image}
          alt='Avatar'
          style={{ width: '150px', height: '170px' }}
        />
      </div>
      <div className={classes.container}>
        <h4>
          <b>{product.title}</b>
        </h4>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Card;
