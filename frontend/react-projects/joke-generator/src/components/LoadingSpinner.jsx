import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-16 h-16">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full animate-spin"></div>
        
        {/* Inner rotating circle */}
        <div className="absolute inset-2 border-4 border-transparent border-b-pink-400 border-l-pink-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Center circle */}
        <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-2xl animate-bounce">😄</span>
        </div>
      </div>
      <p className="ml-4 text-white font-semibold text-lg">Loading joke...</p>
    </div>
  );
}

export default LoadingSpinner;