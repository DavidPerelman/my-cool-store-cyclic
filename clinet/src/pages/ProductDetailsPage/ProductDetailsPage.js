import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api/productsApi';
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import classes from './ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  // const [product, setProduct] = useState({});
  const { productId } = useParams();

  const {
    isLoading,
    isError,
    error,
    data: product,
    refetch,
  } = useQuery('product', () => fetchProduct(productId));

  // const { isLoading, error, sendRequest: fetchProduct } = useHttp();

  // const price = `$${product && product.price.toFixed(2)}`;

  // useEffect(() => {
  //   const transformProduct = (productObj) => {
  //     setProduct(productObj.product);
  //   };

  //   fetchProduct(
  //     {
  //       url: `/api/products/product/${productId}`,
  //     },
  //     transformProduct
  //   );

  //   // setTimeout(() => {
  //   //   const price = `$${product && product.price.toFixed(2)}`;
  //   //   console.log(price);
  //   // }, 5000);
  // }, []);

  let content;

  if (product) {
    content = (
      <div className={classes.detailsContainer}>
        <div className={classes.productContent}>
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        <div className={classes.productImages}>
          <h1>images</h1>
          <ImageSlider images={product.images} />
          {product.images && (
            // product.images.map((image) => {
            //   console.log(image);
            //   return <img src={image} />;
            // })
            <ImageSlider images={product.images} />
          )}
        </div>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className={classes.spinner}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.productDetailsContainer}>{content}</div>
    </div>
  );
};

export default ProductDetailsPage;
