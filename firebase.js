// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbvqDfjNM64I0ai4VVhOc_cIyMAnPd9E",
  authDomain: "inventory-management-3a6e8.firebaseapp.com",
  projectId: "inventory-management-3a6e8",
  storageBucket: "inventory-management-3a6e8.appspot.com",
  messagingSenderId: "662468164745",
  appId: "1:662468164745:web:19d59177605bb8e0765a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};