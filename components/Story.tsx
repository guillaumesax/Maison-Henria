
import React from 'react';
import { STORY_TEXT } from '../constants';

export const Story: React.FC = () => {
  return (
    <section id="histoire" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-12 items-center">
        <img
          src="/histoire-familiale-maison-henria.jpg"
          alt="Portrait familial accompagnant l'histoire de Maison Henria"
          width={714}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full max-w-sm mx-auto h-auto rounded-sm"
        />
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 border border-henria-gold/40 text-[9px] uppercase tracking-[0.4em] text-henria-gold font-bold">
            L'Origine
          </div>
          <p className="text-stone-500 leading-relaxed text-lg md:text-xl font-light">
            {STORY_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};
