import React from 'react';
import classes from './CategoryContainer.module.css';
import products from '../../../data/products/clothes.json';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const CategoryContainer = ({ category }) => {
  const onCategoryClick = () => {
    console.log(category);
  };

  const onCartClick = () => {
    console.log('onCartClick');
  };

  return (
    <div className={classes.CategoryContainer}>
      <header>
        <Button onClick={onCategoryClick}>
          <>
            Our {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </>
        </Button>
      </header>
      <main className={classes.main}>
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              onCartClick={onCartClick}
            />
          );
        })}
      </main>
    </div>
  );
};

export default CategoryContainer;
