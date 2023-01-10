import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import NewCartContext from '../../../store/cartContext';
import Modal from '../../UI/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = ({ onCloseCart }) => {
  const newCartCtx = useContext(NewCartContext);
  const cartCtx = useContext(CartContext);

  if (cartCtx.totalAmount < 0) {
    cartCtx.totalAmount = 0;
  }

  console.log(newCartCtx.items);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {newCartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
