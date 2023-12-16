import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { ref, child, getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0eU3KmkBs5UqqiiH633WoTOG8221VXE",
  authDomain: "uw-study-spots-6236c.firebaseapp.com",
  databaseURL: "https://uw-study-spots-6236c-default-rtdb.firebaseio.com",
  projectId: "uw-study-spots-6236c",
  storageBucket: "uw-study-spots-6236c.appspot.com",
  messagingSenderId: "701428517134",
  appId: "1:701428517134:web:3fe89e90c8b611028faf5f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


// const db = getDatabase();
// // get a reference to the 'users' node in our database
// const buildingsRef = ref(db, 'buildings');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


