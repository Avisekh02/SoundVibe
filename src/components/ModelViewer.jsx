import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

function HeadphoneModel() {
  const { scene } = useGLTF('/models/headphone.glb');
  const modelRef = useRef();

  // Rotate the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005 * modelRef.current.rotation.y/2; // adjust speed here
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.2}
      position={[0, -5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload('https://github.com/Avisekh02/SoundVibe/blob/main/public/models/headphone.glb');

const Lighting = () => {
  const [ambientIntensity, setAmbientIntensity] = useState(0);
  const [directionalIntensity, setDirectionalIntensity] = useState(0);

  useEffect(() => {
    let ambient = 0;
    let directional = 0;

    const stepCount = 180; // number of steps
    const intervalTime = 150; // ms per step
    const ambientStep = 10 / stepCount;
    const directionalStep = 110 / stepCount;

    const interval = setInterval(() => {
      ambient = Math.min(ambient + ambientStep, 10);
      directional = Math.min(directional + directionalStep, 110);

      setAmbientIntensity(ambient);
      setDirectionalIntensity(directional);

      if (ambient >= 10 && directional >= 110) {
        clearInterval(interval);
      }
    }, intervalTime); // 60 steps × 50ms = 3000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={[10, 20, 10]} intensity={directionalIntensity} castShadow />
    </>
  );
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} shadows>
      <OrbitControls enablePan={true} minDistance={10} maxDistance={100} />
      <Suspense fallback={<Html center><p>🎧</p></Html>}>
        <Lighting />
        <HeadphoneModel />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
