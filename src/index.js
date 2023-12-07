import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import BUILDINGS from './data/buildings.json'; //the data to display
import { ref, child, getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNh9t--U0J_WeBxt6KHdh0XiqSmqggix8",
  authDomain: "uw-study-spots.firebaseapp.com",
  databaseURL: "https://uw-study-spots-default-rtdb.firebaseio.com",
  projectId: "uw-study-spots",
  storageBucket: "uw-study-spots.appspot.com",
  messagingSenderId: "487068300917",
  appId: "1:487068300917:web:eced77a54ce24d2dda2a3c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// const db = getDatabase();
// // get a reference to the 'users' node in our database
// const buildingsRef = ref(db, 'buildings');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App buildingsData={BUILDINGS} />
  </React.StrictMode>
);


