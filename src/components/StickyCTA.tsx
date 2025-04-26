import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of the page
      const scrollThreshold = (pageHeight - windowHeight) * 0.5;
      
      setIsVisible(scrollPosition > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-3 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Wycena w 15 min — zero niedoszacowań</p>
            <p className="text-sm text-gray-600">Zacznij już dziś i zwiększ marżę o 17%</p>
          </div>
          
          <a
            href="https://easl.ink/TNDXx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B00] hover:bg-orange-700 text-white py-2 px-6 rounded-full font-medium transition transform hover:scale-105 whitespace-nowrap"
          >
            Wycena w 15 min – Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;