import React, { createContext, useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import productsJson from '../data/products.json';

const ProductContext = createContext({
  createProduct: (product) => {},
});

export const ProductContextProvider = (props) => {
  console.log(productsJson);
  const [error, setError] = useState(null);
  const productsCollectionRef = collection(db, 'products');

  const createProduct = async (product) => {
    console.log(product);
    return;
    await addDoc(productsCollectionRef, {
      uid: user.user.uid,
      email: email,
      username: username,
      role: 'customer',
    })
      .then(async (product) => {
        console.log(product);
      })
      .catch((err) => {
        setError('error!');
        clearError();
      });
  };

  const contextValue = {
    createProduct: createProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
