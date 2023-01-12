import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';
import { useQuery } from 'react-query';
import { fetchAllProductsByCategory } from '../../api/productsApi';
import { fetchCategory } from '../../api/categoriesApi';

const CategoryProductsPage = () => {
  // const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const { data: category } = useQuery('category', () =>
    fetchCategory(categoryId)
  );

  console.log(category);
  const {
    isLoading,
    isError,
    error,
    data: products,
    refetch,
  } = useQuery('products', () => fetchAllProductsByCategory(categoryId));

  // const { isLoading, error, sendRequest: fetchProductsByCategory } = useHttp();

  // useEffect(() => {
  //   const transformProducts = (productsObj) => {
  //     for (const productKey in productsObj) {
  //       setProducts(productsObj[productKey]);
  //     }
  //   };

  //   fetchProductsByCategory(
  //     {
  //       url: `/api/products/category/${categoryId}`,
  //     },
  //     transformProducts
  //   );
  // }, [fetchProductsByCategory]);

  let content;

  if (products && products.length > 0) {
    content = (
      <>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <div className={classes.CategoryProductsPage}>
      <h2 className={classes.header}>{category}</h2>
      <main className={classes.main}>{content}</main>
    </div>
  );
};

export default CategoryProductsPage;
