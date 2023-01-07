import React, { useCallback, useContext, useEffect, useState } from 'react';
import classes from './CategoryContainer.module.css';
import Button from '../../UI/Button/Button';
import ProductCard from '../../Products/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import useHttp from '../../../hooks/use-http';

const CategoryContainer = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { isLoading, error, sendRequest: fetchProductsByCategory } = useHttp();

  useEffect(() => {
    const transformProducts = (productsObj) => {
      for (const productKey in productsObj) {
        setProducts(productsObj[productKey]);
      }
    };

    fetchProductsByCategory(
      {
        url: `api/products/${category._id}`,
      },
      transformProducts
    );
  }, [fetchProductsByCategory]);

  const onCategoryClick = () => {
    navigate(`/products/${category._id}`);
  };

  let content = <p>Found no products.</p>;

  if (products.length > 0) {
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
        <Button onClick={onCategoryClick}>
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
