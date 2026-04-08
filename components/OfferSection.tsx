import React from 'react';
import { ESSENTIAL_1, ESSENTIAL_2, ESSENTIAL_3 } from '../constants';

// Cette section remplace l'ancienne "OfferSection" pour être la section "Essentiel"
export const OfferSection: React.FC = () => {
  return (
    <section id="essentiel" className="py-32 md:py-48 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-12 md:space-y-16">
        
        <p className="font-serif text-2xl md:text-4xl text-stone-800 leading-snug">
          {ESSENTIAL_1}
        </p>

        <p className="font-serif text-2xl md:text-4xl text-stone-600 leading-snug">
          {ESSENTIAL_2}
        </p>

        <p className="font-serif text-2xl md:text-4xl text-stone-400 leading-snug">
          {ESSENTIAL_3}
        </p>

      </div>
    </section>
  );
};