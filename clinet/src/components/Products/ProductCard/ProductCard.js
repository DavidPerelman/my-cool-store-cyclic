import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../../hooks/use-local-storage';
import CartContext from '../../../store/cart-context';
import Card from '../../UI/Card/Card';
import Icon from '../../UI/Icon/Icon';
import classes from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const price = `$${product.price.toFixed(2)}`;
  const existingCartItemIndex = cartCtx.items.findIndex((cartItem) => {
    return product._id === cartItem.product._id;
  });

  const existingCartItem = cartCtx.items[existingCartItemIndex];
  let existingCartItemId;

  if (existingCartItem) {
    existingCartItemId = Object.values(existingCartItem)[0]._id;
  }

  const addToCartHandler = () => {
    cartCtx.addItem(product);
  };

  return (
    <Card>
      <img
        className={classes['card-image']}
        src={product.thumbnail}
        alt='Avatar'
      />
      <div className={classes.container}>
        <div className={classes['product-name']}>{product.title}</div>
        <div className={classes['product-brand']}>
          <span className={classes.brandTitle}>
            <Icon type='fa-brands fa-font-awesome' size='sm' /> {product.brand}
          </span>
        </div>
        <span className={classes['price-action']}>
          {price}
          {existingCartItemId !== product._id ? (
            <Icon
              type='fa-solid fa-cart-plus'
              onClick={(e) => addToCartHandler(e)}
              size='lg'
            />
          ) : (
            <span className={classes['in-cart']}>In Cart</span>
          )}
          {/* {existingCartItemId === product._id ? (
            <span className={classes['in-cart']}>In Cart</span>
          ) : (
            <p>dsd</p>
          )} */}
        </span>
      </div>
      <div className={classes['product-details-link']}>
        <Link to={`/product/${product._id}`} className={classes.linkHeader}>
          Details
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
