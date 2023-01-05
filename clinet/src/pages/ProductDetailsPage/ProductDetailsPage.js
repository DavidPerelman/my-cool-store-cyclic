import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetailsPage.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`/api/products/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));
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
