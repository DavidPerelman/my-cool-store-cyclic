import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';
import useHttp from '../../hooks/use-http';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const { isLoading, error, sendRequest: fetchProductsByCategory } = useHttp();

  useEffect(() => {
    const transformProducts = (productsObj) => {
      for (const productKey in productsObj) {
        setProducts(productsObj[productKey]);
      }
    };

    fetchProductsByCategory(
      {
        url: `/api/products/category/${categoryId}`,
      },
      transformProducts
    );
  }, [fetchProductsByCategory]);

  let content = <p>Found no products.</p>;

  if (products.length > 0) {
    content = products.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <div className={classes.CategoryProductsPage}>
      <h2 style={{ textAlign: 'center' }}>
        {products.length === 0
          ? ''
          : products[0].category.charAt(0).toUpperCase() +
            products[0].category.slice(1)}
      </h2>
      <main className={classes.main}>{content}</main>
    </div>
  );
};

export default CategoryProductsPage;
