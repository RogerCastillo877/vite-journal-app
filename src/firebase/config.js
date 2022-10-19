// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBVn0ZAj9ZMj6-DxtS1o3bLk-NHLejJ3Lg",
//   authDomain: "react-curso-2e478.firebaseapp.com",
//   projectId: "react-curso-2e478",
//   storageBucket: "react-curso-2e478.appspot.com",
//   messagingSenderId: "359249688601",
//   appId: "1:359249688601:web:abbd13e1e0b4532b5e9288"
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyDWZyuntVgZRCjI-8NhFnlGGIdPbfR5Amw",
  authDomain: "test-database-72c27.firebaseapp.com",
  projectId: "test-database-72c27",
  storageBucket: "test-database-72c27.appspot.com",
  messagingSenderId: "295148065531",
  appId: "1:295148065531:web:355f2f30c5dce58a81165e",
  measurementId: "G-MHSGX21CG7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );