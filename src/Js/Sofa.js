
import React, { useEffect } from 'react';


import '../Css/TestCss.css';

import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';
import '../Css/Scenes.css';
import '../Css/ScenesMobile.css';
import Three from './Three';
import sofaImage1 from '../picture2/sf1.jpg';
import sofaImage2 from '../picture2/sf2.jpg';
import sofaImage3 from '../picture2/sf3.jpg';
import sofaImage4 from '../picture2/sf4.jpg';
import sofaImage5 from '../picture2/sf5.png';
import sofaImage6 from '../picture2/sf6.png';
import sofaImage7 from '../picture2/sf7.jpg';
import sofaImage8 from '../picture2/sf8.jpg';
import sofaImage9 from '../picture2/sf9.jpg';
import sofaImage10 from '../picture2/sf10.jpg';


import Header from './Header';
import Footer from './Footer';
import HeaderVariant from './HeaderVariant';

function Gallery() {
    return (
  <div className="App">
   <HeaderVariant/>
    <div className='scenes-menu'>
      <div className='scenes-content'>
        <div className='scenes-title'>
            <h1>Sofas</h1>
        </div>



        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
                <img
               
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
               
            </div>
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
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
            
            </div>
        </div>


        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
                <img
               
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
               
            </div>
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
               src={sofaImage4}
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
            
            </div>
        </div>




        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
                <img
               
        src={sofaImage5}
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
               
            </div>
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
               src={sofaImage6}
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
            
            </div>
        </div>


        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
                <img
               
        src={sofaImage7}
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
               
            </div>
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
               src={sofaImage8}
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
            
            </div>
        </div>



        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
                <img
               
        src={sofaImage9}
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
               
            </div>
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
               src={sofaImage10}
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
            
            </div>
        </div>




      </div>
    </div>
    <Footer/>
    
  </div>
    );
  }
  
  export default Gallery;