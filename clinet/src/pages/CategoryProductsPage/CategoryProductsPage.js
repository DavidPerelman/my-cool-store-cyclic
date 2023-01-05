import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const [products, setProducts] = useState({});
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    fetch(`/api/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={classes.CategoryProductsPage}>
      {/* {categories.map((category, i) => {
        return <CategoryContainer key={i} category={category} />;
      })} */}
    </div>
  );
  return <div>CategoryProductsPage</div>;
};

export default CategoryProductsPage;
