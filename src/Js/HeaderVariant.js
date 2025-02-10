import React from 'react';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import '../Css/HeaderVariant.css';
import { useNavigate } from 'react-router-dom';
import arrow from '../picture2/Arrow.svg';

function HeaderVariant() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="StickVariant"></div>
     
      <div className="HeadVariant">
      <button className='PrevButton' onClick={() => navigate(-1)} >
      <img
        src={arrow}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          width: '50%',
          height: '50%',
           // Adjusts how the image fits into the container
        }}
      />

         {/* Left arrow */}
      </button>
        <div className="LogoSectionVariant">
          <Link className="TitleHome" to="/website">Home</Link>
         
        </div>
      </div>
    </div>
  );
}

export default HeaderVariant;