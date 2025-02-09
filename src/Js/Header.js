import React from 'react';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import agencyImage from '../picture2/logo.svg';

function Header() {
  return (
    <div>
      <div className="Stick"></div>
      <div className="Head">
        <div className="LogoSection">
          <Link className="TitleHome" to="/"> <img src={agencyImage} alt="Agency" /></Link>
        </div>
        <div className="PagesSection">
          <a className="PageLink" href="#about">About Us</a>
          <a className='PageLink' href="#do">What We Do</a>
          <Link className='PageLink' to="/gallery">Gallery</Link>
          <a className='PageLink' href="#foot">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
