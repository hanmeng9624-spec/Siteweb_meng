import React, { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';
import DreamInk from './components/DreamInk';
import { ArtCategory, Artwork } from './types';
import { ARTWORKS, EMAIL } from './constants';

const App: React.FC = () => {
  const [filter, setFilter] = useState<ArtCategory | 'ALL'>('ALL');
  const [showDreamInk, setShowDreamInk] = useState(false);
  
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Navigation 
        currentFilter={filter}
        onFilterChange={setFilter}
        onContactClick={scrollToContact}
        onDreamClick={() => setShowDreamInk(true)}
      />

      <main>
        <Hero />
        
        {/* Subtle transition gradient */}
        <div className="h-24 bg-gradient-to-b from-transparent to-cream -mt-24 relative z-20 pointer-events-none"></div>
        
        <Gallery artworks={ARTWORKS} filter={filter} />
        
        <div ref={footerRef}>
          <ContactFooter />
        </div>
      </main>

      {showDreamInk && (
        <DreamInk onClose={() => setShowDreamInk(false)} />
      )}

      {/* Floating Action Button for Mobile Contact */}
      <a 
        href={`mailto:${EMAIL}`}
        className="fixed bottom-6 right-6 md:hidden z-40 bg-vangogh-blue text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        aria-label="Email Me"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </a>
    </div>
  );
};

export default App;