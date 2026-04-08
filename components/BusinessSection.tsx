import React from 'react';
import { PHONE_NUMBER } from '../constants';

export const BusinessSection: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-12">
          Parlons de votre prochain déjeuner.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="group">
            <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Par téléphone</span>
            <span className="font-serif text-2xl md:text-3xl text-stone-900 group-hover:text-henria-gold transition-colors">
              {PHONE_NUMBER}
            </span>
          </a>

          <button onClick={scrollToForm} className="group text-left">
            <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Par écrit</span>
            <span className="font-serif text-2xl md:text-3xl text-stone-900 group-hover:text-henria-gold transition-colors">
              Demander un devis
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};