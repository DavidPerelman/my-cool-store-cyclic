import React from 'react';

const CartContext = React.createContext({
  show: false,
  showCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
