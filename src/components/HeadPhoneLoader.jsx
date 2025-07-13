import React from 'react';

const HeadphoneLoader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <div className="text-6xl animate-pulse">🎧</div>
      <div className="mt-4 text-lg text-gray-300 animate-bounce">
        Loading SoundVibe Experience...
      </div>
    </div>
  );
};

export default HeadphoneLoader;
