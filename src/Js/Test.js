
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../Css/TestCss.css';

import '../Css/Greeting.css';
import '../Css/GreetingMobile.css';
import '../Css/ImgHero.css';
import '../Css/ImgHeroMobile.css';
import '../Css/ImgContainer.css';
import '../Css/ImgContainerMobile.css';
import '../Css/AboutUs.css';
import '../Css/AboutUsMobile.css';
import '../Css/WhatWeDo.css';
import '../Css/WhatWeDoMobile.css';
import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';


import Greeting from './Greeting';
import ImageHero from './ImageHero';
import ImageContainer from '../Js/ImageContainer';
import AboutUs from './AboutUs';
import OurClients from './OurClients';
import OurServices from './OurServices';
import OurGoals from './OurGoals';
import Header from './Header';
import Footer from './Footer';

function TestDrive() {
    return (
  <div className="App">
   <Header/>
    <div className='PopUp'>
      <div className='Info'>

      </div>
    </div>
    <div className="background"> 
   <div className="Mother"> 
   
    <Greeting/>
   
    <ImageHero/>  
    <ImageContainer/>
    <AboutUs/>
    </div>
    </div>
       
    <div className='split'>
    <div className='TextBox'>
        <h1>What We Do</h1>
      </div>
    </div>

    <div className='Generals'>   
      <div id="do" className="Box">
      <OurClients/>
      <OurServices/>
      <OurGoals/>
      </div>
    </div>
    <div className='Last'>
      <div className='GalleryEntery'>
        
        <h1>Discover Our Gallery</h1>
        
        <Link to="/gallery">
        <button className='GalleryButton'>Enter</button> 
        </Link>
      </div>
    </div>
    <Footer/>
    
  </div>
    );
  }
  
  export default TestDrive;