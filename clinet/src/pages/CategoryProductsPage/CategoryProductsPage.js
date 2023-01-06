import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductCard from '../../components/Products/ProductCard/ProductCard';
import classes from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    fetch(`/api/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className={classes.CategoryProductsPage}>
      <main className={classes.main}>
        {products.length === 0 ? (
          //   <div className={classes.LoadingSpinner}>

          //   </div>
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
