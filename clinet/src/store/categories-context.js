import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection, getDoc } from 'firebase/firestore';

const CategoriesContext = createContext({
  getCategories: () => {},
  clearError: () => {},
});

export const CategoriesContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const categoriesCollectionRef = collection(db, 'categories');

  useEffect(() => {
    getCategories();
  }, []);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const getCategories = async (product) => {
    console.log(products[i].images);

    await getDoc(categoriesCollectionRef)
      .then(async (data) => {
        console.log(data);
      })
      .catch((err) => {
        setError('error!');
        clearError();
      });
  };

  const contextValue = {
    getCategories: getCategories,
    clearError: clearError,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
