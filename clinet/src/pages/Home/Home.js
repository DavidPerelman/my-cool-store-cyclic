import React, { useContext, useEffect, useState } from 'react';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';
import CategoriesContext from '../../store/categories-context';
import './Home.css';

const Home = () => {
  const categoriesCxt = useContext(CategoriesContext);

  useEffect(() => {
    categoriesCxt.getCategories();
  }, []);

  return (
    <>
      <div id='CategoryContainer'>
        <div className='margin-4'></div>
        {categoriesCxt.categories.map((category, i) => {
          return <CategoryContainer key={i} category={category} />;
        })}
      </div>
    </>
  );
};

export default Home;
