import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Impressionist Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 animate-breathe"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")',
          filter: 'contrast(1.2) brightness(1.1)'
        }} 
      />
      
      {/* Abstract Color Blobs (Impressionist strokes) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-monet-blue rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-monet-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-monet-lilac rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 max-w-6xl mx-auto flex flex-col items-center">
        {/* Slogan: Adjusted to be big but not huge (5xl instead of 7xl) */}
        <p className="font-display text-4xl md:text-5xl text-vangogh-blue mb-4 tracking-wider uppercase drop-shadow-sm leading-tight">
          The permanence <br/> of memory
        </p>
        <p className="font-display text-3xl md:text-4xl text-slate-600 mb-10 tracking-wider uppercase drop-shadow-sm leading-tight opacity-80">
          The fluidity <br/> of dreams
        </p>
        
        <div className="h-px w-24 bg-vangogh-gold mb-8"></div>

        {/* Name: Small and subtle */}
        <h1 className="font-display text-lg md:text-xl text-slate-800 tracking-[0.3em] uppercase opacity-90">
          Han Meng
        </h1>
        
        {/* Categories */}
        <div className="mt-4 flex justify-center gap-4 font-sans text-[10px] md:text-xs tracking-[0.2em] text-slate-500 uppercase">
          <span>Tattoo</span>
          <span>•</span>
          <span>Illustration</span>
          <span>•</span>
          <span>Photography</span>
        </div>
      </div>

      {/* Surreal Foreground Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-vangogh-blue">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.3C59,43.1,47.1,51.8,34.8,59.3C22.5,66.8,9.8,73.1,-1.8,76.2C-13.4,79.4,-25.5,79.3,-36.8,74.5C-48.1,69.6,-58.6,60,-67.1,48.5C-75.6,37,-82.1,23.6,-83.9,9.4C-85.7,-4.8,-82.9,-19.8,-74.3,-31.6C-65.7,-43.4,-51.3,-52,-38.1,-59.6C-24.9,-67.2,-12.9,-73.8,1.2,-75.8C15.2,-77.9,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
      </div>
    </section>
  );
};

export default Hero;