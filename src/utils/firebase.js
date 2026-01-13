// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmVee2hwOI36h_N0NC1bJiCPTYIrqNlNY",
  authDomain: "netflixgpt-a54c2.firebaseapp.com",
  projectId: "netflixgpt-a54c2",
  storageBucket: "netflixgpt-a54c2.firebasestorage.app",
  messagingSenderId: "933337271488",
  appId: "1:933337271488:web:ac2f6699daa794c8d77125",
  measurementId: "G-H09NFQ661P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
