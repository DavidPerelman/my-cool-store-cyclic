import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import classes from './ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const { isLoading, error, sendRequest: fetchProduct } = useHttp();

  useEffect(() => {
    const transformProduct = (productObj) => {
      setProduct(productObj.product);
    };

    fetchProduct(
      {
        url: `/api/products/product/${productId}`,
      },
      transformProduct
    );
  }, [fetchProduct]);

  console.log(product);
  return (
    <div className={classes.ProductDetails}>
      <div className={classes.productDetailsContainer}>
        {!isLoading && <h1>{product.title}</h1>}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
