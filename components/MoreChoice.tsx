
import React from 'react';

export const MoreChoice: React.FC = () => {
  return (
    <section className="py-12 bg-stone-100 border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl text-henria-dark">Envie de plus de choix ?</h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Découvrez l'ensemble de nos offres</p>
        </div>
        <div className="pt-2">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcHRrS1Hv6dHkh5Ag8bhNQbwvq6-f5LjluxLCsbR0cSw_epg/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-henria-dark text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-henria-gold transition-colors"
          >
            Voir la carte complète
          </a>
        </div>
      </div>
    </section>
  );
};
