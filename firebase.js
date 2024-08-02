// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA8ZaJiylxO4MLtnFlTChKjvFC4KqHHF4",
  authDomain: "pantry-management-app-999f5.firebaseapp.com",
  projectId: "pantry-management-app-999f5",
  storageBucket: "pantry-management-app-999f5.appspot.com",
  messagingSenderId: "928456837858",
  appId: "1:928456837858:web:0f1f1f97a0f6385222ecbb",
  measurementId: "G-M4NVPBVWSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore=getFirestore(app);

export {firestore}