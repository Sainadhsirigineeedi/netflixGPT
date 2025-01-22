// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCc9_imc75Rjt_zRKSIFufcnc7OHA2L3HM",
  authDomain: "sainadhnetflixgpt.firebaseapp.com",
  projectId: "sainadhnetflixgpt",
  storageBucket: "sainadhnetflixgpt.firebasestorage.app",
  messagingSenderId: "997224665027",
  appId: "1:997224665027:web:f9f82436f6323c673d7776",
  measurementId: "G-K46SEWWQ6D"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth=getAuth()

export {auth,db}