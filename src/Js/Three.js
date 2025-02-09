import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";


import "../Css/Three.css";

// Component to load and render the GLTF model with textures and normal maps
function GLTFModel({ modelRef }) {
  // Load the GLTF model
  const { scene } = useGLTF("/3D/Models/Sofa.glb"); // Update with your model's path

  // Load the texture and normal map (replace with your actual texture paths)

  // Set scale for the model
  scene.position.set(0,-0.3,3);

  scene.scale.set(0.01, 0.01, 0.01);

  // Apply texture and normal map to the material

  return <primitive ref={modelRef} object={scene} />;
}

function Three() {
  const modelRef = useRef(); // Reference to the GLTF model
  const [isDragging, setIsDragging] = useState(false); // Drag state
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 }); // Last pointer position

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !modelRef.current) return;

    const deltaX = e.clientX - lastPosition.x;
    const deltaY = e.clientY - lastPosition.y;

    // Update model rotation based on pointer movement
    modelRef.current.rotation.y += deltaX * 0.01; // Rotate Y-axis
    modelRef.current.rotation.x += deltaY * 0.01; // Rotate X-axis

    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="Canvo">
      <Canvas
        className="Canva"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // Ensures dragging stops when the pointer leaves the canvas
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} color="white" intensity={10} />
        <GLTFModel className="Model" modelRef={modelRef} />
      </Canvas>
    </div>
  );
}

export default Three;
