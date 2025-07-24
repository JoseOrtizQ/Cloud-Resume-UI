// Save this as: src/components/PageTransition.js
import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start transition when route changes
    setIsLoading(true);
    setIsVisible(false);

    // Simulate loading time and then show new content
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 600); // 600ms total transition time

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-opacity duration-300">
          <div className="text-center">
            {/* Animated Logo */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="text-3xl">⚡</span>
              </div>
              
              {/* Spinning Ring */}
              <div className="absolute inset-0 w-20 h-20 mx-auto">
                <div className="w-full h-full border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Loading...</h3>
              <p className="text-blue-100 text-sm">Preparing your experience</p>
            </div>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/20 rounded-full mx-auto mt-6 overflow-hidden">
              <div 
                className="h-full bg-white rounded-full animate-pulse"
                style={{
                  width: '0%',
                  animation: 'loadingBar 0.6s ease-out forwards'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div 
        className={`transition-all duration-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: isVisible ? '0.1s' : '0s'
        }}
      >
        {children}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
            opacity: 1;
          }
          70% {
            width: 85%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default PageTransition;