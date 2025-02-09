import React, { useState, useEffect } from "react";

// Import your pictures
import pic1 from '../picture2/MODELING (1).png';
import pic2 from '../picture2/Furniture.png';
import pic3 from '../picture2/INTERIOR.png';
import pic4 from '../picture2/Animation.png';
import pic5 from '../picture2/AR.png';

const OurServices = () => {
  // State to hold the current picture index
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  // Array of pictures
  const pictures = [pic1, pic2, pic3, pic4, pic5];

  // Handler for changing the picture
  const changePicture = (index) => {
    setCurrentPicIndex(index);
  };

  // Automatically change picture every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Change picture every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [pictures.length]);

  return (
    <div className="InsideBox">
      <div className="info-clients">
        <h2>Our Services</h2>
      </div>

      <div className="BigScreen">
        <img
          src={pictures[currentPicIndex]}
          className="photo"
          alt="Static Sofa"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Adjusts how the image fits into the container
            transition: 'opacity 1s ease-in-out', // Adding the transition here
            opacity: 1,
          }}
        />
      </div>

      <div className="Icons">
        {pictures.map((_, index) => (
          <div
            key={index}
            className="Icon1"
            onMouseEnter={() => changePicture(index)}
            onClick={() => changePicture(index)} // Change picture on click
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
