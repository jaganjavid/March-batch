// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-EwMX9Wau3DqgUAtQWvN2W7o1f5ub68k",
  authDomain: "ads-manage-f4672.firebaseapp.com",
  projectId: "ads-manage-f4672",
  storageBucket: "ads-manage-f4672.appspot.com",
  messagingSenderId: "601341302724",
  appId: "1:601341302724:web:dc8e5f8675d0366feab691"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};