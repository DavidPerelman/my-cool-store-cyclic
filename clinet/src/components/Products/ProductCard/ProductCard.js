import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import NewCartContext from '../../../store/cartContext';
import Card from '../../UI/Card/Card';
import Icon from '../../UI/Icon/Icon';
import classes from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const newCartCtx = useContext(NewCartContext);

  let existingCartItemName;
  const existingCartItemIndex = cartCtx.items.findIndex((item) => {
    return item.title === product.title;
  });
  const existingCartItem = cartCtx.items[existingCartItemIndex];

  if (existingCartItem) {
    existingCartItemName = Object.values(existingCartItem)[1];
  }

  const addToCartHandler = () => {
    newCartCtx.addItem(product);
    // console.log(newCartCtx.addItem);
    // cartCtx.addItem({
    //   id: product.id,
    //   title: product.title,
    //   amount: 1,
    //   price: product.price,
    //   image: product.thumbnail,
    // });
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
          <p className={classes.brandTitle}>
            <Icon type='fa-brands fa-font-awesome' size='sm' /> {product.brand}
          </p>
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
      <div className={classes['product-details-link']}>
        <Link to={`/product/${product._id}`} className={classes.linkHeader}>
          Details
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
