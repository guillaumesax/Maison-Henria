
import React from 'react';
import { STORY_TEXT } from '../constants';

export const Story: React.FC = () => {
  return (
    <section id="histoire" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[136px_minmax(0,1fr)] gap-6 md:gap-10 items-center border-y border-henria-gold/20 py-8">
        <div className="w-32 md:w-[136px] mx-auto rounded-[50%] border border-henria-gold/50 p-1.5">
          <img
          src="/histoire-familiale-maison-henria.jpg"
          alt="Portrait familial accompagnant l'histoire de Maison Henria"
          width={714}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-[50%]"
        />
        </div>
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <h2 className="font-serif text-xl text-henria-dark">L'Origine</h2>
            <span aria-hidden="true" className="h-px w-12 bg-henria-gold/50" />
          </div>
          <p className="text-stone-500 leading-relaxed text-lg md:text-xl font-light">
            {STORY_TEXT}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};
