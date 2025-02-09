
import React, { useEffect } from 'react';


import '../Css/TestCss.css';

import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';
import '../Css/Gallery.css';
import '../Css/GalleryMobile.css';



import sofaImage1 from '../picture2/Scenes.png';
import sofaImage1hover from '../picture2/ScenesHover.png';
import sofaImage2 from '../picture2/Objects.png';
import sofaImage3 from '../picture2/Sofas.png';

import HeaderVariant from './HeaderVariant';
import Footer from './Footer';

import { Link } from 'react-router-dom';




function Gallery() {
  
    return (
      
  <div className="App">
   <HeaderVariant/>
    <div className='gallery-menu'>
      <div className='gallery-content'>
        <div className='gallery-title'>
            <h1>Gallery</h1>
        </div>
        <div className='gallery-main'>
            <div className='Type'>
            <Link to="/scenes">
               
                <div  className='gallery-picture'>
                <img
                id="scenes"
        src={sofaImage1}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
                </div>
                </Link>
            </div>
            <div className='Type'>
            <Link to="/objects">
              
                <div className='gallery-picture'>
                <img
                id='objects'
        src={sofaImage2}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
                </div>
              </Link>
            </div>

            <div className='Type'>
            <Link to="/sofa">
            <div className='gallery-picture'>
            <img
            id='sofas'
        src={sofaImage3}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
            </div>
            </Link>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    
  </div>
    );
  }
  
  export default Gallery;