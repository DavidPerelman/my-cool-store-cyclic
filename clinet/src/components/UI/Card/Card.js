import React, { useContext, useEffect } from 'react';
import HeaderIcon from '../../Layout/HeaderIcon/HeaderIcon';
import Icon from '../Icon/Icon';
import classes from './Card.module.css';
import CartContext from '../../../store/cart-context';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, onCartClick }) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  let existingCartItemName;
  const existingCartItemIndex = cartCtx.items.findIndex((item) => {
    return item.title === product.title;
  });
  const existingCartItem = cartCtx.items[existingCartItemIndex];

  if (existingCartItem) {
    existingCartItemName = Object.values(existingCartItem)[1];
  }

  const productDetailsClickHandler = (id) => {
    navigate(`/product/${id}`);
  };

  const submitHandler = (e) => {};

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      amount: 1,
      price: product.price,
      image: product.thumbnail,
    });
  };

  return (
    <div className={classes.card}>
      <img
        className={classes['card-image']}
        src={product.thumbnail}
        alt='Avatar'
      />
      <div className={classes.container}>
        <div className={classes['product-name']}>{product.title}</div>
        <div className={classes['product-brand']}>
          <Icon type='fa-brands fa-font-awesome' size='sm' />
          <p>{product.brand}</p>
        </div>
        <span className={classes['price-action']}>
          ${product.price}
          {existingCartItemName !== product.title ? (
            <Icon
              type='fa-solid fa-cart-plus'
              onClick={addToCartHandler}
              size='lg'
            />
          ) : (
            <span className={classes['in-cart']}>In Cart</span>
          )}
        </span>
      </div>
      <Button
        onClick={() => productDetailsClickHandler(product._id)}
        className={classes['details-button']}
        color='darkblue'
        style='square'
      >
        Details
      </Button>
    </div>
  );
};

export default Card;
