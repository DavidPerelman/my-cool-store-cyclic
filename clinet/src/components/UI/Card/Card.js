import React, { useContext, useEffect } from 'react';
import HeaderIcon from '../../Layout/HeaderIcon/HeaderIcon';
import Icon from '../Icon/Icon';
import classes from './Card.module.css';
import CartContext from '../../../store/cart-context';

const Card = ({ product, onCartClick }) => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {}, []);

  const submitHandler = (e) => {};

  const addToCartHandler = () => {
    console.log(product);
    // return;
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      amount: product.amount,
      price: product.price,
    });
  };

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
          <Icon type='fa fa-cart-plus' onClick={addToCartHandler} size='lg' />
        </span>
      </div>
    </div>
  );
};

export default Card;
