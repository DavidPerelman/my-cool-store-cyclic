import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  show: false,
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'SHOW_CART') {
    return {
      show: true,
      items: state.items,
      totalAmount: state.totalAmount,
    };
  }
  if (action.type === 'HIDE_CART') {
    return {
      show: false,
      items: state.items,
      totalAmount: state.totalAmount,
    };
  }
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.title === action.item.title;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.title === action.item.title;
    });

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.title !== action.item.title;
      });
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const showCartHandler = () => {
    dispatchCartAction({ type: 'SHOW_CART' });
  };

  const hideCartHandler = () => {
    dispatchCartAction({ type: 'HIDE_CART' });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const cartContext = {
    show: cartState.show,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
