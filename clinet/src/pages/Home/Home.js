import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Layout/Header/Header';
import CartContext from '../../store/cart-context';
import UserContext from '../../store/user-context';
// import classes from './Home.module.css';
import Cart from '../../components/Cart/Cart/Cart';
import User from '../../components/Users/User/User';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';

const Home = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const closeCartHandler = () => {
    cartCtx.hideCart();
  };

  const closeUserModalHandler = () => {
    console.log(userCtx);
    userCtx.hideUserModal();
  };

  return (
    <div>
      {cartCtx.show && <Cart onCloseCart={closeCartHandler} />}
      {userCtx.isUserModalShown && (
        <User onCloseUserModal={closeUserModalHandler} />
      )}
      <Header />
      <div
        id='categoriesContainers'
        style={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {categories.map((category, i) => {
          return <CategoryContainer key={i} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Home;
