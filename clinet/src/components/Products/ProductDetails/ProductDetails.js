import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  console.log(productId);
  return <h1>Product {productId} Details Page</h1>;
};

export default ProductDetails;
