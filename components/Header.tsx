import React from 'react';
import { IMAGES } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a 
          href="https://www.amconsultingai.com" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="AM Consulting Home"
        >
          <img 
            src={IMAGES.logo} 
            alt="AM Consulting Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>
        {/* Navigation removed as requested */}
      </div>
    </header>
  );
};

export default Header;