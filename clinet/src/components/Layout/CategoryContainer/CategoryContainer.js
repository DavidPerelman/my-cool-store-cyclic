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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`api/products/${category._id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchProductsByCategory();
  }, []);

  const onCategoryClick = () => {
    console.log(category._id);
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
