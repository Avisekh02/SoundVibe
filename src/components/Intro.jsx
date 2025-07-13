import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const LandingPage = () => {
  const [moveToTop, setMoveToTop] = useState(false);

  // Trigger movement after reveal (3s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveToTop(true);
    }, 3000); // match reveal duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <motion.h1
        initial={{ clipPath: "inset(0 100% 0 0)", y: "50vh" }}
        animate={{
          clipPath: "inset(0 0% 0 0)",
          y: moveToTop ? "40px" : "50vh", // from center to top
        }}
        transition={{
          clipPath: { duration: 3, ease: "easeInOut" },
          y: { duration: 1.5, ease: "easeInOut", delay: 1 },
        }}
        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold orbitron-font absolute left-1/2 transform -translate-x-1/2 text-center"
      >
        🎧 SoundVibe
      </motion.h1>
    </div>
  );
};

export default LandingPage;
