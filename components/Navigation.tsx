import React, { useState, useEffect } from 'react';
import { ArtCategory } from '../types';

interface NavigationProps {
  currentFilter: ArtCategory | 'ALL';
  onFilterChange: (filter: ArtCategory | 'ALL') => void;
  onContactClick: () => void;
  onDreamClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentFilter, onFilterChange, onContactClick, onDreamClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-4 flex justify-between items-center ${
    scrolled ? 'bg-cream/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-monet-blue to-monet-yellow opacity-80 group-hover:animate-spin"></div>
        <span className="font-display text-2xl tracking-widest text-vangogh-blue">HAN MENG</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-serif text-sm tracking-widest text-slate-600">
        <button 
          onClick={() => onFilterChange('ALL')}
          className={`hover:text-vangogh-blue transition-colors ${currentFilter === 'ALL' ? 'text-vangogh-blue font-bold border-b border-vangogh-blue' : ''}`}
        >
          ALL WORKS
        </button>
        <button 
          onClick={() => onFilterChange(ArtCategory.TATTOO)}
          className={`hover:text-vangogh-blue transition-colors ${currentFilter === ArtCategory.TATTOO ? 'text-vangogh-blue font-bold border-b border-vangogh-blue' : ''}`}
        >
          INK
        </button>
        <button 
          onClick={() => onFilterChange(ArtCategory.ILLUSTRATION)}
          className={`hover:text-vangogh-blue transition-colors ${currentFilter === ArtCategory.ILLUSTRATION ? 'text-vangogh-blue font-bold border-b border-vangogh-blue' : ''}`}
        >
          ILLUSTRATION
        </button>
        <button 
          onClick={() => onFilterChange(ArtCategory.PHOTOGRAPHY)}
          className={`hover:text-vangogh-blue transition-colors ${currentFilter === ArtCategory.PHOTOGRAPHY ? 'text-vangogh-blue font-bold border-b border-vangogh-blue' : ''}`}
        >
          PHOTO
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onDreamClick}
          className="hidden md:block px-4 py-2 text-xs font-bold tracking-widest text-white bg-gradient-to-r from-monet-lilac to-monet-blue rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          DREAM INK AI
        </button>
        <button 
          onClick={onContactClick}
          className="px-6 py-2 border border-vangogh-blue text-vangogh-blue font-serif italic hover:bg-vangogh-blue hover:text-white transition-colors duration-300"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navigation;