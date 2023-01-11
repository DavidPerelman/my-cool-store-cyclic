import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import productsJson from '../data/products.json';

const ProductContext = createContext({
  createProduct: (product) => {},
  clearError: () => {},
});

export const ProductContextProvider = (props) => {
  const [error, setError] = useState(null);
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    // createProduct();
  }, []);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const createProduct = async (product) => {
    console.log(productsJson.products);
    const products = productsJson.products;
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].images);

      await addDoc(productsCollectionRef, {
        // _id: products[i],
        title: products[i].title,
        brand: products[i].brand,
        category: products[i].category,
        description: products[i].description,
        price: products[i].price,
        thumbnail: products[i].thumbnail,
        title: products[i].title,
        images: products[i].images,
      })
        .then(async (product) => {
          console.log(product);
        })
        .catch((err) => {
          setError('error!');
          clearError();
        });
    }
  };

  const contextValue = {
    createProduct: createProduct,
    clearError: clearError,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
