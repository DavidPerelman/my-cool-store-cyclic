// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAcSWdXQfnlGw3kIWkAdpXtQ3Gr6Oxo8Hk',
  authDomain: 'react-auth-40b24.firebaseapp.com',
  databaseURL: 'https://react-auth-40b24-default-rtdb.firebaseio.com',
  projectId: 'react-auth-40b24',
  storageBucket: 'react-auth-40b24.appspot.com',
  messagingSenderId: '985696924870',
  appId: '1:985696924870:web:207256f82ebf3e1c13d3c7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
