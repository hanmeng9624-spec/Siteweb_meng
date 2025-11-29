import React from 'react';
import { EMAIL } from '../constants';

const ContactFooter: React.FC = () => {
  return (
    <footer className="relative bg-vangogh-blue text-cream py-20 px-6 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: `radial-gradient(circle at 50% 50%, #F4E6A3 1px, transparent 1px)`, 
                 backgroundSize: '20px 20px' 
             }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl mb-8">Ready to create?</h2>
            <p className="font-serif text-xl md:text-2xl text-monet-blue mb-12 italic">
                "Art is the only way to run away without leaving home."
            </p>

            <a 
                href={`mailto:${EMAIL}`}
                className="inline-block px-12 py-4 border-2 border-monet-yellow text-monet-yellow font-sans font-bold tracking-[0.2em] hover:bg-monet-yellow hover:text-vangogh-blue transition-colors duration-300 text-lg mb-16"
            >
                CONTACT ME
            </a>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm font-sans tracking-widest opacity-60">
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                    {EMAIL}
                </a>
                <span className="hidden md:inline">•</span>
                <span>BASED IN SHANGHAI / WORLDWIDE</span>
                <span className="hidden md:inline">•</span>
                <span>@HANMENG.ART</span>
            </div>
            
            <div className="mt-12 text-xs opacity-30">
                &copy; {new Date().getFullYear()} HAN Meng. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
};

export default ContactFooter;