import React, { useEffect, useState } from 'react';
import Home from '../components/Home';
import Hero from '../components/Hero'; 
const HeroSection = () => {
const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 15000); // ⏱️ 15 seconds delay

    return () => clearTimeout(timer); // 🧹 Clean up
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {showHero ? <Home /> : <Hero /> }
    </div>
  );
};

export default HeroSection;
