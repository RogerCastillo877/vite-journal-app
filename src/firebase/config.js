// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVn0ZAj9ZMj6-DxtS1o3bLk-NHLejJ3Lg",
  authDomain: "react-curso-2e478.firebaseapp.com",
  projectId: "react-curso-2e478",
  storageBucket: "react-curso-2e478.appspot.com",
  messagingSenderId: "359249688601",
  appId: "1:359249688601:web:abbd13e1e0b4532b5e9288"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );