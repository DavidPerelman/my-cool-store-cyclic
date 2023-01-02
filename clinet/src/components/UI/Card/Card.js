import React from 'react';
import HeaderIcon from '../../Layout/HeaderIcon/HeaderIcon';
import Icon from '../Icon/Icon';
import classes from './Card.module.css';

const Card = ({ product, onCartClick }) => {
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
        <span className={classes['price-action']}>
          ${product.price}
          <Icon type='fa-shopping-cart' onClick={onCartClick} size='lg' />
        </span>
      </div>
    </div>
  );
};

export default Card;
