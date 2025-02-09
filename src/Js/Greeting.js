import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Greeting() {
  const [isHovered, setIsHovered] = useState(false);

  // Variants for the position animations
  const columnVariants = {
    stacked: {
      position: 'relative',
      y: '50%',
      opacity: 1,
    },
    unstacked: {
      position: 'relative',
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      opacity: 1,
    },
  };



  const column2Variants = {
    hidden: {
      position: 'relative',
      opacity: 0,
      visibility: 'hidden',
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
      zIndex: 1,
    },
    visible: {
      position: 'relative',
      opacity: 1,
      visibility: 'visible',
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      zIndex: 2,
    },
  };
  

  return (
    <div
      className="info-greeting"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Column 1 */}
      <motion.div
        className="info-greeting-column1"
        initial="stacked"
        animate={isHovered ? 'unstacked' : 'stacked'}
        variants={columnVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="major">Welcome To Modelium</h1>
      </motion.div>





      {/* Column 2 */}
      <motion.div
        className="info-greeting-column2"
        initial="hidden"
        animate={isHovered ? 'visible' : 'hidden'}
        variants={column2Variants}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: isHovered ? 0 : 0.3, // Add delay on hover out for smooth fading
        }}
      >
        <p className="minor">Transforming Spaces, Inspiring Lives</p>
        <p className="minor">Your Vision, Our Craftsmanship</p>
        <p className="minor">Timeless Designs, Tailored to You</p>
      </motion.div>
    </div>
  );
}

export default Greeting;
