import React from 'react';
import facebook from '../picture/facebook.svg';
import instagram from '../picture/insta.svg';
import linkedin from '../picture/lin.svg';
import agencyImage from '../picture2/logo.svg';

function Footer() {
  return (
    <div>
      <div className='BlackFootFixed'>
      
      </div>
      <div className='BlackFoot'>
        <div className='foot-Section'>
        <img src={agencyImage} alt="Agency" />
        </div>
        <div id='foot' className='foot-Section'>
          <h4>Get in Touch</h4>
          <p>koolimohamedomar@gmail.com</p> <br/>
          <p>+216    99 009 439</p>
          <div className='SocialMedia'>
            <div className='media'>
            <img
                 src={facebook}
                 className="facebook"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
            </div>
            <div className='media'>
            <img
                 src={instagram}
                 className="instagram"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
              
            </div>
            <div className='media'>
            <img
                 src={linkedin}
                 className="linkedin"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
              
            </div>
          </div>  
          </div>
        <div className='foot-Section'>
          <h4>Tunisia</h4>
          <p> Borj Cedria,Ben Arous, Tunis</p>  <br/> <br/> <br/> <br/> <br/> <br/> <br/>
  <p className='copydate' >©2025 </p>  
        </div>
        
        </div>
    </div>
  );
}

export default Footer;
