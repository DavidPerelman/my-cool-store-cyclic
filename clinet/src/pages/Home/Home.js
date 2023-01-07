import React, { useEffect, useState } from 'react';
import CategoryContainer from '../../components/Layout/CategoryContainer/CategoryContainer';
import './Home.css';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`api/categories`);
      const data = await response.json();

      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div id='CategoryContainer'>
        <div className='margin-4'></div>
        {categories.map((category, i) => {
          return <CategoryContainer key={i} category={category} />;
        })}
      </div>
    </>
  );
};

export default Home;
