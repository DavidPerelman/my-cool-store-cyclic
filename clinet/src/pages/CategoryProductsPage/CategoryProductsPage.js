import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/products/category/${categoryId}`);
      const data = await response.json();

      setProducts(data.products);
      setIsLoading(false);
    };

    fetchProductsByCategory();
    // console.log(products[0].category);
  }, []);

  return (
    <div className={classes.CategoryProductsPage}>
      <h2 style={{ textAlign: 'center' }}>
        {products.length === 0
          ? ''
          : products[0].category.charAt(0).toUpperCase() +
            products[0].category.slice(1)}
      </h2>
      <main className={classes.main}>
        {!isLoading &&
          products.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        {!isLoading && products.length === 0 && <p>Found no products.</p>}
        {isLoading && <LoadingSpinner />}
      </main>
    </div>
  );
};

export default CategoryProductsPage;
