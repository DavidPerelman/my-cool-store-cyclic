import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetailsPage.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/product/${productId}`);
      const data = await response.json();

      setProduct(data.product);
    };

    fetchProduct();
  }, []);

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.productDetailsContainer}>
        <h1>{product.title}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
