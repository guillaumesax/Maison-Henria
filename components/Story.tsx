
import React from 'react';
import { STORY_TEXT } from '../constants';

export const Story: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <div className="inline-block px-3 py-1 border border-henria-gold/40 text-[9px] uppercase tracking-[0.4em] text-henria-gold font-bold">
          L'Origine
        </div>
        <p className="text-stone-500 leading-relaxed text-lg md:text-xl font-light">
          {STORY_TEXT}
        </p>
      </div>
    </section>
  );
};
