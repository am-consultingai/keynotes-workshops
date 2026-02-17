import React from 'react';
import { Mail } from 'lucide-react';
import { IMAGES, MAILTO_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 border-b border-gray-800 pb-20">
          {/* Instructor Bio */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <img 
                src={IMAGES.instructor} 
                alt="Avishay Meron" 
                className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
              />
               <div>
                  <h3 className="text-2xl font-bold text-white">Avishay Meron</h3>
                  <p className="text-blue-400">CEO & Founder, AM Consulting</p>
               </div>
            </div>
            
            <p className="leading-relaxed text-lg mb-6">
              Avishay Meron has been "taming" Artificial Intelligence for over a decade, bringing rich and unique experience to the forefront of technology. As the CEO and Founder of AM Consulting, Avishai guides organizations through the adoption and implementation of AI solutions to empower their business capabilities. 
            </p>
            <p className="leading-relaxed text-lg mb-8">
              With over 10 patents in the field of AI to his name, he specializes in making complex AI concepts accessible to any audience, transforming technology from a complicated tool into a practical, everyday work partner.
            </p>

            <a 
              href="https://www.linkedin.com/in/avishay-meron/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <img src={IMAGES.linkedin} alt="LinkedIn" className="w-6 h-6" />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
          </div>

          {/* Final CTA Box */}
          <div className="bg-gray-800 rounded-2xl p-10 text-center shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your team?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Empower your organization with the skills to survive and thrive in the AI era.
            </p>
            <a 
              href={MAILTO_LINK}
              className="w-full inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/50"
            >
              Request your training/keynote now!!
            </a>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Expect a response within 24 hours
            </p>
          </div>
        </div>

        {/* Simple Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <a href="https://www.amconsultingai.com" className="hover:text-white transition-colors mb-4 md:mb-0">
             &copy; {new Date().getFullYear()} AM Consulting. All rights reserved.
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;