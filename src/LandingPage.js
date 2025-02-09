import './App.css';
import logo from './picture/LOGO.svg';
import whatwedo from './picture/whatwedo.svg';
import aboutus from './picture/aboutus.svg';
import gallery from './picture/gallery.svg';
import contactus from './picture/contactus.svg';
import sofa from './picture/Sofa.svg';
import copyright from './picture/copyright.svg';
import facebook from './picture/facebook.svg';
import insta from './picture/insta.svg';
import lin from './picture/lin.svg';
import GetInTouch from './picture/GetInTouch.svg';
import mail from './picture/mail.svg';
import slogon from './picture/slogon.svg';
import adress from './picture/adress.svg';
import  tunisia from './picture/Tunisia.svg';
import left from './picture/ArrowLeft.svg';
import right from './picture/ArrowRight.svg';
import welcome from './picture/Welcome.svg';
import slide from './picture/Slide.svg';
import titlewwd from './picture/titlewwd.svg';
import React, { useState } from "react";



function LandingPage() {
  return (
<div className="App">
  <header className="App-header">
    <div className="header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="menu">
        <img src={whatwedo} className="what-we-do" alt="what-we-do" />
        <img src={aboutus} className="about-us" alt="about-us" />
        <img src={gallery} className="gallery" alt="gallery" />
        <img src={contactus} className="contact-us" alt="contact-us" />
      </div>
    </div>
    <div className="body">
      <div className="page">
        <div className="cont1">
          <div className='section1'>
           <div className='dotleft'>
             <img src={slide} className="slide" alt="slide" />
           </div> 
           <div className='arrowleft'>
             <img src={left} className="left" alt="sofa" />
           </div>
           <div className='greeting'>
             <img src={welcome} className="hello" alt="sofa" />
           </div>
         </div>
         <div className='section2'>
             <img src={sofa} className="sofa" alt="sofa" />
         <div className='dotright'>
             <img src={slide} className="slide" alt="slide" />
         </div> 
         <div className='arrowright'>
             <img src={right} className="right" alt="sofa" />
         </div>
         </div>
       </div>
      </div>

      <div className="page">
       <div className="cont1">
        <div className='section2'>
          <img src={sofa} className="sofa" alt="sofa"/>
        </div>
        <div className='section1'>
         <div className='title'>
          <img src={titlewwd} className="wwd" alt="sofa" />
         </div>
        <div className='summary'>
          <p> For [Company Name], interior design is more than a craft<br/>—it’s a commitment to excellence. With [Number of <br/>years] of dedicated practice, we have mastered the art of<br/> creating spaces that resonate with elegance and<br/> purpose.<br/>
              Our passion lies in the details, where every stitch, texture,<br/> and finish speaks of our unwavering enthusiasm for<br/> delivering exceptional products. While we embrace the<br/> breadth of interior design, we take pride in our<br/> specialization: crafting sofas that embody comfort, style, and sophistication.<br/>
              At [Company Name], we don't just design interiors; we<br/> create experiences—spaces where every element tells a <br/>story, and every piece finds its place.</p>
        </div>
        <div className='line'>
          <div className='ellipse'>
          </div>
          </div>
        </div>
       </div>        
      </div>
  <div className="page">
  <div className="block-3"> 
    <h1>About Us</h1>
    <div className="block-row">
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture One" />
        <h1>Picture One</h1>
      </div>
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture Two" />
        <h1>Picture Two</h1>
      </div>
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture Three" />
        <h1>Picture Three</h1>
      </div>
    </div>
    <div className="block-row">
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture One" />
        <h1>Picture Four</h1>
      </div>
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture Two" />
        <h1>Picture Five</h1>
      </div>
      <div className="blocks">
        <img src={sofa} className="pic" alt="Picture Three" />
        <h1>Picture Six</h1>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className="footer">
  <div className="footer-menu">
    <div className="footer-section1">
      <div className="block">
        <img src={logo} alt="Logo"/>
        <img src={slogon} alt="Slogan" />
      </div>
      <div className="block">
        <img src={GetInTouch} alt="Get in Touch" className="getintouch-footer" />
        <img src={mail} alt="Mail"/>
      </div>

      <div className="socials">
        <img src={facebook} alt="Facebook" />
        <img src={lin} alt="LinkedIn" />
        <img src={insta} alt="Instagram" />
      </div>

      <div className="block">
        <img src={copyright} alt="Copyright" />
      </div>
    </div>

    
    <div className="footer-section2">
      <img src={whatwedo} alt="What We Do" />
      <img src={aboutus} alt="About Us" />
      <img src={gallery} alt="Gallery" />
      <img src={contactus} alt="Contact Us" />
    </div>


    <div className="footer-section3">
      <div className="location">
        <img src={tunisia} alt="Tunisia" />
        <img src={adress} alt="Address" />
      </div>
    </div>
  </div>
</div>

  </header>
</div>


  );
}

export default LandingPage;
