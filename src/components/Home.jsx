import React, { useEffect, useState } from 'react';
import Intro from '../components/Intro'; 
import Hero from '../components/Hero'; // Make sure this exists
import LandingPage from '../components/Landing'; // Make sure this exists
const Home = () => {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 7000); // ⏱️ 10 seconds delay

    return () => clearTimeout(timer); // 🧹 Clean up
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {showHero ? <Intro /> :<LandingPage /> }
    </div>
  );
};

export default Home;
