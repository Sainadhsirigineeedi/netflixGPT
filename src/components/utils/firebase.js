// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc9_imc75Rjt_zRKSIFufcnc7OHA2L3HM",
  authDomain: "sainadhnetflixgpt.firebaseapp.com",
  projectId: "sainadhnetflixgpt",
  storageBucket: "sainadhnetflixgpt.firebasestorage.app",
  messagingSenderId: "997224665027",
  appId: "1:997224665027:web:f9f82436f6323c673d7776",
  measurementId: "G-K46SEWWQ6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth()

export {auth}