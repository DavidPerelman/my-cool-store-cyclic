import React, { useContext, useEffect, useState } from 'react';
import classes from './CategoryContainer.module.css';
import Button from '../../UI/Button/Button';
import ProductCard from '../../Products/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const CategoryContainer = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      const response = await fetch(`api/products/${category._id}`);
      const data = await response.json();

      setProducts(data.products);
      setIsLoading(false);
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
        {!isLoading &&
          products.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        {!isLoading && products.length === 0 && <p>Found no products.</p>}
        {isLoading && <LoadingSpinner />}
      </main>
    </div>
  );
};

export default CategoryContainer;
