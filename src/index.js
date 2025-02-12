import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';



import reportWebVitals from './reportWebVitals';
import TestDrive from './Js/Test.js';
import Gallery from './Js/Gallery.js';

import Three from './Js/Three.js';
import Scenes from './Js/Scenes.js';
import Objects from './Js/Objects.js';
import Sofa from './Js/Sofa.js';

import './index.css';
import './LandingPage.css';
import './Css/TestCss.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
