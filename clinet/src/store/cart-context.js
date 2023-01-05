import React from 'react';

const CartContext = React.createContext({
  show: false,
  showCart: () => {},
  hideCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
