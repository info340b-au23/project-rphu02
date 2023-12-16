import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { ref, child, getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDNh9t--U0J_WeBxt6KHdh0XiqSmqggix8",
//   authDomain: "uw-study-spots.firebaseapp.com",
//   databaseURL: "https://uw-study-spots-default-rtdb.firebaseio.com",
//   projectId: "uw-study-spots",
//   storageBucket: "uw-study-spots.appspot.com",
//   messagingSenderId: "487068300917",
//   appId: "1:487068300917:web:eced77a54ce24d2dda2a3c"
// };

const firebaseConfig = {
  apiKey: "AIzaSyATXG0Wb-cLvAY5ab0DsYOzCxZE9ctG3IQ",
  authDomain: "group4-studyspots.firebaseapp.com",
  projectId: "group4-studyspots",
  storageBucket: "group4-studyspots.appspot.com",
  messagingSenderId: "6461489128",
  appId: "1:6461489128:web:f1584dadb7f45048172e5d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const db = getDatabase();
// // get a reference to the 'users' node in our database
// const buildingsRef = ref(db, 'buildings');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


