import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';
import { useQuery } from 'react-query';
import { fetchAllProductsByCategory } from '../../api/productsApi';
import { fetchCategory } from '../../api/categoriesApi';
import useProductsQuery from '../../hooks/useProductsQuery';
import useCategoriesQuery from '../../hooks/useCategoriesQuery';

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const { data: category } = useCategoriesQuery(categoryId);
  const { isLoading, error, data: products } = useProductsQuery(categoryId);

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
