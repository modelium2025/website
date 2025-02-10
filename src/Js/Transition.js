import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './Loading';
import TestDrive from './Test';  // Import the LandingPage component
import '../Css/Loading.css';
import '../Css/Transition.css';
const loadImages = (context) => {
  return context.keys().map(context);
};

const images = loadImages(require.context('../picture2/', false, /\.(png|jpe?g|svg)$/));

const Transition = () => {
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedCount((prev) => prev + 1);
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
    });

    const timer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 10000);  // Adjust the delay as needed (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timer);  // Clean up the timer
  }, []);

  useEffect(() => {
    if (loadedCount === images.length && minimumTimeElapsed) {
      setLoading(false);
      navigate('/');  // Navigate to the /website path after loading
    }
  }, [loadedCount, minimumTimeElapsed, navigate]);

  return (
    <div className="pl">
      {loading && (
        <div>
            <div className="il">
          <LoadingScreen />
          </div>
          <div className="il">
           <p id='n1'>{Math.round((loadedCount / images.length) * 100)}% </p>
           </div>
        </div>
      )}
      {!loading && <TestDrive />} 
    </div>
  );
};

export default Transition;
