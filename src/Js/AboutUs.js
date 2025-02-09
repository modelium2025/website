import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  // Variants for the position animations
  const columnVariants = {
    stacked: {
      position: 'relative',
      y: '200%',
      opacity: 1,
      zIndex:'15'
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
      className="info-about"
      id= "about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Column 1 */}
      <motion.div
        className="info-about-column1"
        initial="stacked"
        animate={isHovered ? 'unstacked' : 'stacked'}
        variants={columnVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="major">About Us</h1>
      </motion.div>





      {/* Column 2 */}
      <motion.div
        className="info-about-column2"
        initial="hidden"
        animate={isHovered ? 'visible' : 'hidden'}
        variants={column2Variants}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: isHovered ? 0 : 0.1, // Add delay on hover out for smooth fading
        }}
      >
        <p className="minor">For Modelium, interior design is more than a craft<br/>—it’s a commitment to excellence. With 15 years of dedicated practice, we have mastered the art of<br/> creating spaces that resonate with elegance and<br/> purpose.<br/>
              Our passion lies in the details, where every stitch, texture,<br/> and finish speaks of our unwavering enthusiasm for<br/> delivering exceptional products. While we embrace the<br/> breadth of interior design, we take pride in our<br/> specialization: crafting sofas that embody comfort, style, and sophistication.<br/>
              At Modelium, we don't just design interiors; we<br/> create experiences—spaces where every element tells a story, and every piece finds its place.</p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
