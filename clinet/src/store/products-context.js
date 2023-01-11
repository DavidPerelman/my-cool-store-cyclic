import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import productsJson from '../data/products.json';

const ProductContext = createContext({
  createProduct: (product) => {},
  getProductsByCategory: () => {},
  clearError: () => {},
});

export const ProductContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [products, setproducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');
  const categoriesCollectionRef = collection(db, 'categories');

  useEffect(() => {
    // getProductsByCategory();
  }, []);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const createProduct = async (product) => {
    // const products = productsJson.products;
    // for (let i = 0; i < products.length; i++) {
    //   console.log(products[i].images);
    //   await addDoc(productsCollectionRef, {
    //     title: products[i].title,
    //     brand: products[i].brand,
    //     category: products[i].category,
    //     description: products[i].description,
    //     price: products[i].price,
    //     thumbnail: products[i].thumbnail,
    //     title: products[i].title,
    //     images: products[i].images,
    //   })
    //     .then(async (product) => {
    //       console.log(product);
    //     })
    //     .catch((err) => {
    //       setError('error!');
    //       clearError();
    //     });
    // }
  };

  const getProductsByCategory = async (category) => {
    // const q = query(
    //   productsCollectionRef,
    //   where('category', '==', `${category}`)
    // );
    // await getDocs(q)
    //   .then((data) => {
    //     data.forEach((doc) => {
    //       console.log(doc.id, ' => ', doc.data());
    //     });
    //   })
    //   .catch((err) => {
    //     setError('error!');
    //     clearError();
    //   });
  };

  const contextValue = {
    createProduct: createProduct,
    getProductsByCategory: getProductsByCategory,
    clearError: clearError,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
