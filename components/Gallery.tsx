import React from 'react';
import { Artwork, ArtCategory } from '../types';

interface GalleryProps {
  artworks: Artwork[];
  filter: ArtCategory | 'ALL';
}

const Gallery: React.FC<GalleryProps> = ({ artworks, filter }) => {
  const filteredArt = filter === 'ALL' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <section className="py-20 px-4 md:px-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-slate-800 mb-12 text-center">
          {filter === 'ALL' ? 'COLLECTED WORKS' : filter}
        </h2>
        
        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredArt.map((art) => (
            <div 
              key={art.id} 
              className="break-inside-avoid group relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={art.imageUrl} 
                  alt={art.title}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110 filter sepia-[0.2] group-hover:sepia-0"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-vangogh-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-monet-yellow mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {art.title}
                  </h3>
                  <p className="font-sans text-white text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {art.description}
                  </p>
                  <span className="mt-4 px-3 py-1 border border-white/30 text-xs text-white uppercase tracking-[0.2em]">
                    {art.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredArt.length === 0 && (
            <div className="text-center py-20 font-serif italic text-gray-400">
                No works found in this category yet.
            </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;