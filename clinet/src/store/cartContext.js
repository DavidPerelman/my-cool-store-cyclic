import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/use-local-storage';

const NewCartContext = createContext({
  cartIsShown: false,
  showCart: () => {},
  hideCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  console.log(cartItems);

  useEffect(() => {
    const calculateTotalCost = () => {
      const itemsPrice = cartItems.reduce(
        (previousValue, cartItem) =>
          previousValue + cartItem.product.price * cartItem.amount,
        0
      );

      console.log(itemsPrice);
    };

    calculateTotalCost();
  }, []);

  const onShowCart = () => {
    setCartIsShown(true);
  };

  const onHideCart = () => {
    setCartIsShown(false);
  };

  const addCartItem = (product) => {
    setCartItems((prevCartItems) => {
      if (
        prevCartItems.find((cartItem) => cartItem.product._id === product._id)
      ) {
        alert('The product is already in the cart');
        return prevCartItems;
      }
      return [...prevCartItems, { product: product, amount: 1 }];
    });
  };

  const contextValue = {
    cartIsShown: cartIsShown,
    showCart: onShowCart,
    hideCart: onHideCart,
    items: cartItems,
    totalAmount: 0,
    addItem: addCartItem,
    removeItem: (id) => {},
  };

  return (
    <NewCartContext.Provider value={contextValue}>
      {props.children}
    </NewCartContext.Provider>
  );
};

export default NewCartContext;
