import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

import "../Css/Three.css";
import "../Css/Spatial.css";
import HeaderVariant from "./HeaderVariant";

// Import the GLB files from the src folder
import NavyModel from "../Models/Navy.glb"; // Adjust the path as needed
import Model2 from "../Models/Lakelyn.glb"; // Add your second model
import Model3 from "../Models/Aiem.glb"; // Add your third model

// Array of models
const models = [NavyModel, Model2, Model3];

// Component to load and render the GLTF model
function GLTFModel({ modelPath }) {
  const groupRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Position the model at (0, -1, 3)
        model.position.set(0, -1, 3);
        model.scale.set(1, 1, 1); // Adjust the scale if needed

        // Clear previous model
        groupRef.current.clear();

        // Reset rotation of the group
        groupRef.current.rotation.set(0, 0, 0);

        // Add the model to the scene
        groupRef.current.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
  }, [modelPath]);

  return <group ref={groupRef} />;
}

function Spatial() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  // Function to handle model switching
  const switchModel = (direction) => {
    if (direction === "left") {
      setCurrentModelIndex((prevIndex) =>
        prevIndex === 0 ? models.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentModelIndex((prevIndex) =>
        prevIndex === models.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="io">
      <HeaderVariant />
      <Canvas className="io">
        {/* Ambient Light */}
        <ambientLight intensity={5} /> {/* Increased intensity */}

        {/* Hemisphere Light */}
        <hemisphereLight
          color={0xffffff} // Sky color
          groundColor={0x444444} // Ground color
          intensity={0.6} // Overall intensity
        />

        {/* Directional Lights */}
        <directionalLight
          position={[5, 5, 5]} // Light from the top-right
          color="white"
          intensity={0.8}
        />
        <directionalLight
          position={[-5, 5, -5]} // Light from the top-left
          color="white"
          intensity={0.8}
        />
        <directionalLight
          position={[0, -5, 0]} // Light from below
          color="white"
          intensity={0.5}
        />

        {/* Point Light */}
        <pointLight
          position={[0, 5, 0]} // Light from above
          color="white"
          intensity={0.5}
        />

        {/* Render the GLTF Model */}
        <GLTFModel modelPath={models[currentModelIndex]} />

        {/* Orbit Controls */}
        <OrbitControls
          target={[0, -0.3, 3]} // Set the target to (0, -0.3, 3)
          enablePan={true} // Allow panning
          enableZoom={true} // Allow zooming
          enableRotate={true} // Allow rotation
        />
      </Canvas>

      {/* Left and Right Arrows */}
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-47%)",
          cursor: "pointer",
          fontSize: "2rem",
          color: "Grey",
        }}
        onClick={() => switchModel("left")}
      >
        &#9664; {/* Left Arrow */}
      </div>
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-47%)",
          cursor: "pointer",
          fontSize: "2rem",
          color: "Grey",
        }}
        onClick={() => switchModel("right")}
      >
        &#9654; {/* Right Arrow */}
      </div>
    </div>
  );
}

export default Spatial;