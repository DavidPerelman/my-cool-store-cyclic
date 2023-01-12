import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';
// import CategoriesContext from '../../store/categories-context';
import './Home.css';
import { fetchCategories } from '../../api/categoriesApi';

const Home = () => {
  const {
    isLoading,
    isError,
    error,
    data: categories,
    refetch,
  } = useQuery('categories', fetchCategories);

  useEffect(() => {
    if (isLoading) {
      // return console.log('Loading...');
    }
    if (isError) {
      // return console.log('error...');
    }
  }, []);

  // console.log(categories?.categories);
  // const categoriesCxt = useContext(CategoriesContext);

  // useEffect(() => {
  //   categoriesCxt.getCategories();
  // }, []);

  return (
    <>
      <div id='CategoryContainer'>
        <div className='margin-4'></div>
        {categories?.categories.map((category, i) => {
          return <CategoryContainer key={i} category={category} />;
        })}
      </div>
    </>
  );
};

export default Home;
