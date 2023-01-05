import React, { useContext, useEffect, useState } from 'react';
import classes from './CategoryContainer.module.css';
import Button from '../../UI/Button/Button';
import ProductCard from '../../Products/ProductCard/ProductCard';
import CartContext from '../../../store/cart-context';
import { useNavigate } from 'react-router-dom';

const CategoryContainer = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    fetch(`api/products/${category._id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const onCategoryClick = () => {
    console.log(category._id);
    navigate(`/products/${category._id}`);
  };

  return (
    <div className={classes.CategoryContainer}>
      <header>
        <Button onClick={onCategoryClick}>
          <>
            Our {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </>
        </Button>
      </header>
      <main className={classes.main}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </main>
    </div>
  );
};

export default CategoryContainer;
