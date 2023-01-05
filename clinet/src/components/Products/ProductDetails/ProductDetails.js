import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return <h1>Product {productId} Details Page</h1>;
};

export default ProductDetails;
