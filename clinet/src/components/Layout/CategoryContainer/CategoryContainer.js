import React, { useEffect, useState } from 'react';
import classes from './CategoryContainer.module.css';
// import products from '../../../data/products/clothes.json';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const CategoryContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const onCategoryClick = () => {
    console.log(category);
  };

  return (
    <div className={classes.CategoryContainer}>
      <header>
        <Button onClick={onCategoryClick}>
          <>Our {category.charAt(0).toUpperCase() + category.slice(1)}</>
        </Button>
      </header>
      <main className={classes.main}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </main>
    </div>
  );
};

export default CategoryContainer;
