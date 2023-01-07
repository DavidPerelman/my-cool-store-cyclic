import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await fetch(`/api/products/category/${categoryId}`);
      const data = await response.json();

      setProducts(data.products);
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
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </main>
    </div>
  );
};

export default CategoryProductsPage;
