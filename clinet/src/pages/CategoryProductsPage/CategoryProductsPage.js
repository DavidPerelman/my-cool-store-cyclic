import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/products/category/${categoryId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchProductsByCategory();
    // console.log(products[0].category);
  }, []);

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
