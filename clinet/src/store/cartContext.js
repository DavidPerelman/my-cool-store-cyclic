import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/use-local-storage';

const NewCartContext = createContext({
  cartIsShown: false,
  showCart: () => {},
  hideCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addCartItemAmount: (id) => {},
  removeItem: (id) => {},
});

export const CartContextProvider = (props) => {
  const [totalCartCost, setTotalCartCost] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  console.log(cartItems);

  const calculateTotalCost = () => {
    const itemsPrice = cartItems.reduce(
      (previousValue, cartItem) =>
        previousValue + cartItem.product.price * cartItem.amount,
      0
    );

    setTotalCartCost(itemsPrice);
  };

  useEffect(() => {
    calculateTotalCost();
  }, [totalCartCost, cartItems, cartItems]);

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

  const addCartItemAmount = (item) => {
    const existingCartItemIndex = cartItems.findIndex((cartItem) => {
      return item.product._id === cartItem.product._id;
    });

    let updatedItems;

    const existingCartItem = cartItems[existingCartItemIndex];
    if (existingCartItem.amount === 99) {
      return;
    } else {
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: (existingCartItem.amount += 1),
        };

        updatedItems = [...cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      setCartItems(updatedItems);
    }

    // updatedItems = [...cartItems];

    // console.log(updatedItems);

    // const productId = item.product._id;
    // console.log(cartItems);
    // for (let i = 0; i < cartItems.length; i++) {
    //   if (productId === cartItems[i].product['_id']) {
    //     if (cartItems[i].amount === 99) {
    //       return;
    //     } else {
    //       cartItems[i].amount += 1;
    //     }
    //   }
    // }

    // setCartItems(cartItems);
  };

  const contextValue = {
    cartIsShown: cartIsShown,
    showCart: onShowCart,
    hideCart: onHideCart,
    items: cartItems,
    totalAmount: totalCartCost,
    addItem: addCartItem,
    addCartItemAmount: addCartItemAmount,
    removeItem: (id) => {},
  };

  return (
    <NewCartContext.Provider value={contextValue}>
      {props.children}
    </NewCartContext.Provider>
  );
};

export default NewCartContext;
