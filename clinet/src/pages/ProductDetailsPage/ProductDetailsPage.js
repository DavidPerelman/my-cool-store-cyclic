import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import classes from './ProductDetailsPage.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/products/product/${productId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        setProduct(data.product);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.productDetailsContainer}>
        {!isLoading && <h1>{product.title}</h1>}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default ProductDetails;
