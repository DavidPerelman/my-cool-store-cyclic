import React from 'react';
import classes from './CategoryContainer.module.css';
import Button from '../../UI/Button/Button';
import ProductCard from '../../Products/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import useProductsQuery from '../../../hooks/useProductsQuery';

const CategoryContainer = ({ category }) => {
  const navigate = useNavigate();
  const { isLoading, error, data: products } = useProductsQuery(category._id);

  const onCategoryClick = () => {
    navigate(`/products/${category._id}`);
  };

  let content;

  if (products && products.length > 0) {
    content = products.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <div className={classes.CategoryContainer}>
      <header>
        <Button onClick={onCategoryClick} background='#4d1601'>
          <>
            Our {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </>
        </Button>
      </header>
      <main className={classes.main}>{content}</main>
    </div>
  );
};

export default CategoryContainer;
