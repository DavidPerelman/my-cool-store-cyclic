import React, { useContext, useEffect, useState } from 'react';
import classes from './Home.module.css';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <>
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
    </>
  );
};

export default Home;
