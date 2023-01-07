import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import classes from './ProductDetailsPage.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/products/product/${productId}`);
      const data = await response.json();

      setProduct(data.product);
      console.log(data.product);
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
