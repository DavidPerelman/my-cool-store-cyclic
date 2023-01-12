import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';
import { useCategoryTitleQuery } from '../../hooks/useCategoriesQuery';
import { useProductsQuery } from '../../hooks/useProductsQuery';

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const { data: category } = useCategoryTitleQuery(categoryId);
  const { isLoading, error, data: products } = useProductsQuery(categoryId);

  console.log(category);
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
