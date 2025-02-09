import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import sofaImage from '../picture2/01.jpg';
import yellowSofaImage from '../picture2/02.jpg';


function ImageHero() {
  const [currentImage, setCurrentImage] = useState(sofaImage); // Keep track of the current image
  const [nextImage, setNextImage] = useState(yellowSofaImage); // Keep track of the next image (default to the second image)
  const [direction, setDirection] = useState(null); // Used to control animation direction (left or right)
  const [activeDiv, setActiveDiv] = useState(1); // Track active div (1 or 2)



  const handleEllipseClick = (divNumber) => {
    // Update state based on the clicked ellipse
    if (divNumber === 1) {
      setCurrentImage(sofaImage);
      setNextImage(yellowSofaImage);
      setActiveDiv(1);
    } else if (divNumber === 2) {
      setCurrentImage(yellowSofaImage);
      setNextImage(sofaImage);
      setActiveDiv(2);
    }
  };


  useEffect(() => {
    const imageContainer = document.querySelector('.image-hero');
    let swipeDelta = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    const handleSwipe = () => {
      if (swipeDelta > 0) {
        // Swiped left (next image should be on the left)
        setDirection('left');
        setActiveDiv(2);
        setTimeout(() => {
        }, 500); // Wait for the exit animation to complete
      } else if (swipeDelta < 0) {
        // Swiped right (next image should be on the right)
        setDirection('right');
        setActiveDiv(1);
        setTimeout(() => {
        }, 500); // Wait for the exit animation to complete
      }
      swipeDelta = 0; // Reset swipeDelta
    };
    const handleDrag = () => {
        if (swipeDelta < 0) {
          // Swiped left (next image should be on the left)
          setDirection('left');
          setActiveDiv(2);
          setTimeout(() => {
          }, 500); // Wait for the exit animation to complete
        } else if (swipeDelta > 0) {
          // Swiped right (next image should be on the right)
          setDirection('right');
          setActiveDiv(1);
          setTimeout(() => {
          }, 500); // Wait for the exit animation to complete
        }
        swipeDelta = 0; // Reset swipeDelta
      };
      

    const onWheel = (e) => {
      swipeDelta += e.deltaX;
      if (Math.abs(swipeDelta) > 50) handleSwipe();
    };

    const onStart = (e) => {
      touchStartX = e.touches ? e.touches[0].screenX : e.screenX;
    };

    const onEnd = (e) => {
      touchEndX = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
      swipeDelta = touchEndX - touchStartX;
      handleDrag();

    
    };

    // Event listeners
    imageContainer.addEventListener('touchstart', onStart);
    imageContainer.addEventListener('touchend', onEnd);
    imageContainer.addEventListener('mousedown', onStart);
    imageContainer.addEventListener('mouseup', onEnd);
    imageContainer.addEventListener('wheel', onWheel);

    return () => {
      imageContainer.removeEventListener('touchstart', onStart);
      imageContainer.removeEventListener('touchend', onEnd);
      imageContainer.removeEventListener('mousedown', onStart);
      imageContainer.removeEventListener('mouseup', onEnd);
      imageContainer.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div className="image-hero">
      <motion.div
        className="Epsilon"
        onClick={() => handleEllipseClick(1)} 
        animate={{
          backgroundColor: activeDiv === 1 ? 'black' : 'white', // Change color based on activeDiv
        }}
        transition={{ duration: 0.5 }}
        style={{  }}
      ></motion.div>  
      <motion.div
        className="Epsilon"
        onClick={() => handleEllipseClick(2)}
        animate={{
          backgroundColor: activeDiv === 2 ? 'black' : 'white', // Change color based on activeDiv
        }}
        transition={{ duration: 0.5 }}
        style={{
            marginRight: '-5%'
        }}
      ></motion.div>
      
      <motion.img
        src={currentImage}
        className="photo" 
        id="swipeImage"
        alt="Swipeable Sofa"

        initial={{ opacity: 1, x: 0}} // Start with opacity 1 and no translation
        animate={{
          opacity: direction === 'left' ? 0 : 1,
          x: direction === 'left' ? '0%' : direction === 'right' ? '0%' : 0, // Move left or right based on direction
        }}
        exit={{
          opacity: direction === 'right' ? 0 : 1,
          x: direction === 'left' ? '0%' : direction === 'right' ? '-100%' : 0, // Exit animation for smooth transition
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Set duration for smooth transition
        style={{ position: 'absolute', top: 0, left: 0,zIndex:2 }}
      />
      <motion.img
        src={nextImage}
        className="photo" 
        id="swipeImage"
        alt="Swipeable Sofa"
        initial={{ opacity: 1, x: 0 }} // Start with opacity 1 and no translation
        animate={{
          opacity: direction === 'right' ? 0 : 1,
          x: direction === 'left' ? '0%' : direction === 'right' ? '0' : 0, // Move the next image in
        }}
        exit={{
          opacity: direction === 'right' ? 1 : 0,
          x: direction === 'left' ? '0%' : direction === 'right' ? '0%' : 0, // Exit animation for smooth transition
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Set duration for smooth transition
        style={{ position: 'absolute', top: 0, left: 0, zIndex:1 }}
      />
    </div>
  );
}

export default ImageHero;
