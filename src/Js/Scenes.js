
import React, { useEffect } from 'react';


import '../Css/TestCss.css';

import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';
import '../Css/Scenes.css';
import '../Css/ScenesMobile.css';
import Three from './Three';
import sofaImage1 from '../picture2/127.jpg';
import sofaImage2 from '../picture2/138.png';
import sofaImage3 from '../picture2/135.jpg';
import sofaImage4 from '../picture2/136.jpg';
import sofaImage5 from '../picture2/137.jpg';
import sofaImage6 from '../picture2/142.jpg';
import sofaImage7 from '../picture2/143.png';
import sofaImage8 from '../picture2/229.jpg';
import sofaImage9 from '../picture2/230.jpg';
import sofaImage10 from '../picture2/240.jpg';
import sofaImage11 from '../picture2/241.png';
import sofaImage12 from '../picture2/28.jpg';
import sofaImage13 from '../picture2/156.jpg';

import sofaImage14 from '../picture2/245.jpg';
import sofaImage15 from '../picture2/246.jpg';
import sofaImage16 from '../picture2/247.jpg';
import sofaImage17 from '../picture2/248.png';
import sofaImage18 from '../picture2/250.jpg';
import sofaImage19 from '../picture2/251.png';
import sofaImage20 from '../picture2/252.jpg';
import sofaImage21 from '../picture2/253.png';
import sofaImage22 from '../picture2/254.jpg';
import sofaImage23 from '../picture2/257.png';
import sofaImage24 from '../picture2/258.png';
import sofaImage25 from '../picture2/259.png';

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
            <h1>Scenes</h1>
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
                <div id='n135' className='scenes-picture'>
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
            <div id='n136' className='scenes-picture'>
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
            <div className='Type'>
            <div id='n137' className='scenes-picture'>
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
            
            
        </div>
        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
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
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
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
        </div>
        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
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
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
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
        </div>

        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div  id='n127' className='scenes-picture'>
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
           
            <div className='Type'>
            <div id="n138" className='scenes-picture'>
            <img
               
               src={sofaImage11}
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
               
        src={sofaImage12}
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
               
               src={sofaImage13}
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
               
        src={sofaImage14}
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
               
               src={sofaImage15}
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
               
        src={sofaImage16}
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
               
               src={sofaImage17}
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
               
        src={sofaImage18}
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
               
               src={sofaImage19}
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
               
        src={sofaImage20}
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
               
               src={sofaImage21}
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
               
        src={sofaImage22}
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
               
               src={sofaImage23}
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
               
        src={sofaImage24}
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
               
               src={sofaImage25}
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