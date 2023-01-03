import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart/Cart';
import CategoryContainer from './components/Layout/CategoryContainer/CategoryContainer';
import Header from './components/Layout/Header/Header';
import User from './components/Users/User/User';
// import categories from './data/categories.json';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [userStatusIsShown, setUserStatusIsShown] = useState(false);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    await fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    console.log(categories);
    // getData();
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showUserStatusHandler = () => {
    setUserStatusIsShown(true);
  };

  const hideUserStatusHandler = () => {
    setUserStatusIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      {userStatusIsShown && (
        <User
          onCloseUserStatus={hideUserStatusHandler}
          setUserStatusIsShown={setUserStatusIsShown}
        />
      )}

      <Header
        onShowCart={showCartHandler}
        onHideCart={hideCartHandler}
        onShowUserStatus={showUserStatusHandler}
        onHideUserStatus={hideUserStatusHandler}
      />
      <div
        id='categoriesContainers'
        style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column' }}
      >
        {categories.map((category) => {
          console.log(category);
          return <CategoryContainer key={category} category={category} />;
        })}
      </div>
    </CartProvider>
  );
}

export default App;
