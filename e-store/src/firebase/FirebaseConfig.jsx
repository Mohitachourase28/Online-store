/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeuUaQ61NNq1Wq--gLrBzsi2fGHkuEmEI",
  authDomain: "myecom-825af.firebaseapp.com",
  projectId: "myecom-825af",
  storageBucket: "myecom-825af.appspot.com",
  messagingSenderId: "84338594509",
  appId: "1:84338594509:web:690e76b1736582eb914f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}