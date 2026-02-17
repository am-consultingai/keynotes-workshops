import React, { useEffect } from 'react';
import { X, ArrowRight, Lightbulb, Users, Zap, BookOpen, Terminal } from 'lucide-react';
import { ServiceItem } from '../types';
import { MAILTO_LINK, IMAGES } from '../constants';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  item: ServiceItem | null;
}

const SlideOver: React.FC<SlideOverProps> = ({ isOpen, onClose, item }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex justify-end transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Panel */}
      <div 
        className={`relative w-full md:w-[60vw] lg:w-[50vw] max-w-3xl bg-white shadow-2xl h-full flex flex-col transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sticky Header */}
        <div className="flex-none px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div>
            <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded mb-1">
              {item.category}
            </span>
            <h2 className="text-xl font-bold text-gray-900 leading-tight pr-8">
              {item.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
            aria-label="Close panel"
          >
            <X className="w-6 h-6 text-gray-500 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 pb-8">
          
          {/* Header Image */}
          <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-md">
            <img 
              src={IMAGES.slideOverHeader} 
              alt="Session Context - Stage" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Target Audience */}
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-md flex items-start gap-3">
             <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
             <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Target Audience</h4>
                <p className="text-gray-900 font-medium">{item.targetAudience}</p>
             </div>
          </div>

          {/* The Hook / Reality Check */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Main Message
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium italic border-l-2 border-blue-200 pl-4">
              "{item.hook}"
            </p>
          </section>

           {/* The Abstract */}
           <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              The Abstract
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {item.abstract}
            </p>
          </section>

          {/* Why It Feels Current */}
          <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
             <h3 className="text-lg font-bold text-blue-900 mb-2">Why It Feels Current</h3>
             <p className="text-blue-800 leading-relaxed text-sm">
                {item.whyCurrent}
             </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Experience</h3>
             <p className="text-gray-700 leading-relaxed">
                {item.experience}
             </p>
          </section>

          {/* Takeaways / Modules */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              {item.takeawaysTitle}
            </h3>
            <div className="space-y-4">
              {item.takeaways.map((takeaway, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-1 flex items-start gap-2">
                    <span className="text-blue-500 text-sm mt-1">●</span>
                    {takeaway.title}
                  </h4>
                  <p className="text-gray-600 text-sm ml-5">
                    {takeaway.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Takeaway (Workshops only) */}
          {item.technicalTakeaway && (
             <section className="bg-gray-900 text-gray-300 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-400" />
                  Technical Takeaway
                </h3>
                <p className="leading-relaxed font-mono text-sm text-green-100/80">
                   {item.technicalTakeaway}
                </p>
             </section>
          )}

        </div>

        {/* Footer CTA */}
        <div className="flex-none p-6 bg-white border-t border-gray-100 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
          <a 
            href={MAILTO_LINK}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30"
          >
            Request this Service
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;