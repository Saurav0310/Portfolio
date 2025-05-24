import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Portfolio<span className="text-amber-500">.</span>
            </a>
            <p className="mt-2 text-slate-400 max-w-md">
              Creating beautiful web experiences with modern technologies and thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors duration-300 mb-6"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            
            <p className="text-slate-400 flex items-center">
              Made with <Heart className="h-4 w-4 text-amber-500 mx-1" /> in {currentYear}
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;