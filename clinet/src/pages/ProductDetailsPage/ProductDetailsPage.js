import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchProduct } from '../../api/productsApi';
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Button from '../../components/UI/Button/Button';
import classes from './ProductDetailsPage.module.css';
import Icon from '../../components/UI/Icon/Icon';
import Carousel from '../../components/UI/Carousel/Carousel';

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const {
    isLoading,
    isError,
    error,
    data: product,
    refetch,
  } = useQuery('product', () => fetchProduct(productId));

  let content;

  const containerStyles = {
    width: '90%',
    height: '280px',
    margin: '0 auto',
  };

  if (product) {
    content = (
      <div className={classes.detailsContainer}>
        <div className={classes.productContent}>
          <div className={classes.productContentText}>
            <div className={classes.productBrand}>
              <Icon type='fa-brands fa-font-awesome' size='sm' />
              <p>{product.brand}</p>
            </div>
            <h1>{product.title}</h1>
            <p>
              <Link>{product.category}</Link>
              {/* <Link to={`/products/${category._id}`}>{product.category}</Link> */}
            </p>
            <p className={classes.productDescription}>{product.description}</p>

            <div className={classes.productContentAction}>
              <h5>{`$${product.price.toFixed(2)}`}</h5>
              <Button>Add to cart</Button>
            </div>
          </div>
        </div>
        <div className={classes.productImagesContainer}>
          <Carousel images={product.images} />
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
