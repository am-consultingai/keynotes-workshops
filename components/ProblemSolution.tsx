import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* The Problem */}
          <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="absolute -top-6 left-8 bg-red-100 p-3 rounded-xl border border-red-200">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900 mb-4">The Standard Training Trap</h3>
            <p className="text-gray-600 leading-relaxed">
              Most "off-the-shelf" training is obsolete before the slide deck is even finished. Technology moves too fast for static curriculums, leaving your team with knowledge that expires in months.
            </p>
          </div>

          {/* The Solution */}
          <div className="relative">
            {/* Floating Icon - Outside the clipped container */}
            <div className="absolute -top-6 left-8 bg-blue-500 p-3 rounded-xl border border-blue-400 shadow-lg z-20">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            
            {/* Content Container - Clipped for background effect */}
            <div className="relative p-8 rounded-2xl bg-blue-900 text-white shadow-xl overflow-hidden">
               {/* Background Blur */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="mt-4 text-2xl font-bold text-white mb-4">The Real-Time Fix</h3>
                <p className="text-blue-100 leading-relaxed">
                  Bespoke content that is updated in real-time as tech evolves. We deliver "living" workshops and keynotes that address the tools released <i>yesterday</i>, not last year.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;