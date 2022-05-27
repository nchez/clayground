import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2eEJNxTgwF-Ko_v88f8kmxwbuaNOpvmE",
  authDomain: "clayground-9ea69.firebaseapp.com",
  projectId: "clayground-9ea69",
  storageBucket: "clayground-9ea69.appspot.com",
  messagingSenderId: "1019639455266",
  appId: "1:1019639455266:web:d97155987d3a95d4f2747b",
  measurementId: "G-KK5E60K6X5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
