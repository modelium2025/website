import logo from './picture/LOGO.svg';
import './App.css';
import './Css/TestCss.css';

import TestDrive from './Js/Test.js';
import Gallery from './Js/Gallery.js';
import Scenes from './Js/Scenes.js';
import Objects from './Js/Objects.js';
import Sofa from './Js/Sofa.js';
import LoadingScreen from './Js/Loading.js';
import Transition from './Js/Transition.js';
import  Spatial from "./Js/Spatial.js";
import ScrollToTop from './Js/ScrollToTop.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <ScrollToTop/>
    <Routes>
      <Route path="/website" element={<Transition />} />
      <Route path="/" element={<TestDrive />} />
      <Route path="/spatial" element={<Spatial />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/Scenes" element={<Scenes />} />
      <Route path="/Objects" element={<Objects />} />
      <Route path="/Sofa" element={<Sofa />} />
    </Routes>
  </Router>
);
}

export default App;