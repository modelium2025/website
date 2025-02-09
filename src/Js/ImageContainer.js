import React from 'react';
import sofaImage from '../picture2/03.jpg';

function ImageContainer() {
  return (
    <div className="image-gallery" style={{ position: 'relative' }}>
      <img
        src={sofaImage}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
    </div>
  );
}

export default ImageContainer;
