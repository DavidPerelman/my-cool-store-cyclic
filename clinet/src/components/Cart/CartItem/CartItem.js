import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
  const price = `$${item.product.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-product-details']}>
        <img className={classes['cart-image']} src={item.product.thumbnail} />
        <div>
          <h3>{item.product.title}</h3>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {item.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
