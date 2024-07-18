// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-7e777.firebaseapp.com",
  projectId: "twitter-7e777",
  storageBucket: "twitter-7e777.appspot.com",
  messagingSenderId: "180347027252",
  appId: "1:180347027252:web:d84dce7d0307a11e1bef61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);