import React, { useContext, useEffect, useState } from 'react';
import classes from './CategoryContainer.module.css';
import Button from '../../UI/Button/Button';
import ProductCard from '../../Products/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const CategoryContainer = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await fetch(`api/products/${category._id}`);
      const data = await response.json();

      setProducts(data.products);
    };

    fetchProductsByCategory();
  }, []);

  const onCategoryClick = () => {
    console.log(category._id);
    navigate(`/products/${category._id}`);
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
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </main>
    </div>
  );
};

export default CategoryContainer;
