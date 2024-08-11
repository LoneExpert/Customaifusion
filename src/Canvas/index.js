import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

import Shirt from "./Shirt";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";

import state from "../Store";

const CanvasModel = () => {
  const [smallscreen, setsmallscreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleSize = () => {
      setsmallscreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const position = smallscreen
    ? [-0.1, 0, 0]
    : state.intro
    ? [-0.4, 0, 0]
    : [0, 0, 0];

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 6], fov: 23 }} 
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <BackDrop />
        <Center position={position}>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
