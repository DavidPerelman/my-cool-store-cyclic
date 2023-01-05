import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`/api/products/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));
  }, []);

  return <h1>Product {product.title} Details Page</h1>;
};

export default ProductDetails;
