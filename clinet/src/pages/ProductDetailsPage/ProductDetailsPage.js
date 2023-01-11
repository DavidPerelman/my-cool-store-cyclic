import React, { useContext, useEffect, useState } from 'react';
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
  }, []);

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.productDetailsContainer}>
        {!isLoading && (
          <div className={classes.detailsContainer}>
            <div className={classes.productContent}>
              <h1>{product.title}</h1>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <div className={classes.productImages}>
              <h1>images</h1>
              {product.images &&
                product.images.map((image) => {
                  // console.log(image);
                  // return <img src={image} />;
                })}
            </div>
          </div>
        )}
        {isLoading && (
          <div className={classes.spinner}>
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
