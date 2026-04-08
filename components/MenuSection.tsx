import React from 'react';
import { VISUAL_TEXT } from '../constants';

// Cette section remplace "MenuSection" pour devenir la "Visual Break"
export const MenuSection: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-screen">
       <div className="absolute inset-0">
        <img 
            src="https://images.unsplash.com/photo-1626804475297-411dbe631260?q=80&w=2574&auto=format&fit=crop" 
            alt="Détail culinaire" 
            className="w-full h-full object-cover"
        />
       </div>
       
       <div className="absolute inset-0 bg-black/20"></div>

       <div className="absolute bottom-12 left-6 md:left-12 max-w-xl">
         <p className="text-white font-serif text-3xl md:text-5xl leading-tight">
           {VISUAL_TEXT}
         </p>
         <div className="w-12 h-0.5 bg-white mt-8"></div>
       </div>
    </section>
  );
};