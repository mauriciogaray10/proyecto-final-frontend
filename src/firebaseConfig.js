// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyHKy4u0j8i3HiAIFLfPJ0t9eWspQBmAY",
  authDomain: "travelword-f347c.firebaseapp.com",
  projectId: "travelword-f347c",
  storageBucket: "travelword-f347c.appspot.com",
  messagingSenderId: "103618873861",
  appId: "1:103618873861:web:f8880674d2412601f52a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)