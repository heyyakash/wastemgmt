// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV0KrNqfdGeO8bUPXxOZwx-PQTCCfyjLQ",
  authDomain: "wastemgmt-4d9b3.firebaseapp.com",
  projectId: "wastemgmt-4d9b3",
  storageBucket: "wastemgmt-4d9b3.appspot.com",
  messagingSenderId: "418469625081",
  appId: "1:418469625081:web:e83e5c29a8ee6dceb2b628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default app;
export { db };