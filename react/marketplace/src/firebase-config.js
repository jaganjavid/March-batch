
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCqC3_3fA0B-ZxN1q9xQOZ6rPb6DUCrtbY",
  authDomain: "marketplace-1c4ce.firebaseapp.com",
  projectId: "marketplace-1c4ce",
  storageBucket: "marketplace-1c4ce.appspot.com",
  messagingSenderId: "945688471531",
  appId: "1:945688471531:web:26372a064631e82bde1bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();