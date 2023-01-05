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

  return (
    <div
      className={classes.productDetails}
      style={{
        // marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <Card>
        <ul>{mealList}</ul>
      </Card> */}
      <div className={classes.productDetailsContainer}>
        <h1>Card</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
