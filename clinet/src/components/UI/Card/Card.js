import React, { useContext, useEffect } from 'react';
import HeaderIcon from '../../Layout/HeaderIcon/HeaderIcon';
import Icon from '../Icon/Icon';
import classes from './Card.module.css';
import CartContext from '../../../store/cart-context';

const Card = ({ product, onCartClick }) => {
  const cartCtx = useContext(CartContext);

  let existingCartItemName;
  const existingCartItemIndex = cartCtx.items.findIndex((item) => {
    return item.name === product.name;
  });
  const existingCartItem = cartCtx.items[existingCartItemIndex];
  if (existingCartItem) {
    existingCartItemName = Object.values(existingCartItem)[1];
  }

  const submitHandler = (e) => {};

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      amount: product.amount,
      price: product.price,
      image: product.image,
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
          <b>{product.name}</b>
        </h4>
        <span className={classes['price-action']}>
          ${product.price}
          {existingCartItemName !== product.name ? (
            <Icon
              type='fa-solid fa-cart-plus'
              onClick={addToCartHandler}
              size='lg'
            />
          ) : (
            <span className={classes['in-cart']}>in cart</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
