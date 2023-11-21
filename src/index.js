import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import BUILDINGS from './data/buildings.json'; //the data to display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App buildingsData={BUILDINGS}/>
  </React.StrictMode>
);


