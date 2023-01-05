import React, { useReducer } from 'react';
import UserContext from './user-context';

const defaultUserState = {
  show: false,
  user: {},
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  if (action.type === 'SHOW_USER_MODAL') {
    const showUserModalStatus = true;

    return {
      show: showUserModalStatus,
      user: state.user,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'HIDE_USER_MODAL') {
    const showCartStatus = false;

    return {
      items: state.items,
      show: showCartStatus,
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

const UserProvider = ({ children }) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const showUserModalHandler = () => {
    dispatchUserAction({ type: 'SHOW_USER_MODAL' });
  };

  const hideUserModalHandler = () => {
    dispatchUserAction({ type: 'HIDE_USER_MODAL' });
  };

  const loginUserHandler = (userData) => {
    dispatchUserAction({ type: 'LOGIN', userData: userData });
  };

  const registerUserHandler = (newUserData) => {
    dispatchUserAction({ type: 'REGISTER', newUserData: newUserData });
  };

  const logoutHandler = (newUserData) => {
    dispatchUserAction({ type: 'REGISTER', newUserData: newUserData });
  };

  const userContext = {
    show: false,
    showUserModal: showUserModalHandler,
    hideUserModal: hideUserModalHandler,
    user: userState.user,
    isLoggedIn: userState.isLoggedIn,
    login: loginUserHandler,
    register: registerUserHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
