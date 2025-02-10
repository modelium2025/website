import React from 'react';
import "../Css/Loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <p>Loading</p>
      <div className='loader'></div>
    </div>
    
  );
};

export default LoadingScreen;