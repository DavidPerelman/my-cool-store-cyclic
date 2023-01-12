import React from 'react';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';
import './Home.css';
import useCategoriesQuery from '../../hooks/useCategoriesQuery';

const Home = () => {
  const { isLoading, isError, data: categories } = useCategoriesQuery();

  if (isLoading) {
    return console.log('Loading...');
  }
  if (isError) {
    return console.log('error...');
  }

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
