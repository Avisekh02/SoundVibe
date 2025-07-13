import React from 'react';
import { Link } from 'react-router-dom';

const HeadphoneHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Experience Sound Like Never Before
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Immerse yourself in crystal-clear audio with our cutting-edge headphones. 
              Designed for comfort, style, and unparalleled sound quality.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/shop"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                Shop Now
              </Link>
              <Link
                to="/features"
                className="border border-gray-300 text-gray-300 hover:text-white hover:border-white font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Headphone Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium Headphones"
              className="w-full max-w-md mx-auto object-contain transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Superior Sound</h3>
              <p className="text-gray-400">
                High-fidelity audio with deep bass and crisp highs for an immersive experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">All-Day Comfort</h3>
              <p className="text-gray-400">
                Ergonomic design with plush ear cushions for extended wear without fatigue.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Noise Cancellation</h3>
              <p className="text-gray-400">
                Advanced ANC technology to block out distractions and focus on your music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneHero;