// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7_miCQQjO3iv3k1jJectDjCHxhEIQ58",
  authDomain: "gramer-bazar-f75f9.firebaseapp.com",
  projectId: "gramer-bazar-f75f9",
  storageBucket: "gramer-bazar-f75f9.appspot.com",
  messagingSenderId: "963822304985",
  appId: "1:963822304985:web:e98d9cbcaba47ea05888c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app