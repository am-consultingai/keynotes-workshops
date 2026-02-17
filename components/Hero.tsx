import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MAILTO_LINK, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBackground} 
          alt="AI Chamber Stage" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/50 lg:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 backdrop-blur-sm border border-blue-100 text-blue-700 font-semibold text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Bookings for Q3/Q4
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight drop-shadow-sm">
            Future-Proof Your Workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tech-Driven Learning</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-800 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
            Highly customized training and keynotes that bridge the gap between organizational goals and the latest technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={MAILTO_LINK}
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              Request a Custom Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;