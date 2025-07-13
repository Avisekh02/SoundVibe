import React from 'react';
import ModelViewer from './ModelViewer';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <motion.div
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/soundvibe-bg.jpg')" }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: "-100%", opacity: 0 }}
      transition={{ delay: 5, duration: 3, ease: "easeInOut" }}
    >
      {/* Overlay Text */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 text-center text-white">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg orbitron-font">🎧 SoundVibe</h1>
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-gray-300 orbitron-font"
        >
          Immersive 3D Audio Experience
        </motion.h1>
      </div>

      {/* 3D Viewer Behind Text */}
      <div className="absolute inset-0 z-0">
        <ModelViewer />
      </div>
    </motion.div>
  );
};

export default Intro;