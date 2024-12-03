// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY9FGXbgZjY6x68kK9M0pHwId_d8IboIM",
  authDomain: "coffee-store-6424c.firebaseapp.com",
  projectId: "coffee-store-6424c",
  storageBucket: "coffee-store-6424c.firebasestorage.app",
  messagingSenderId: "793410258846",
  appId: "1:793410258846:web:40fb592daa8631cf6d788f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
