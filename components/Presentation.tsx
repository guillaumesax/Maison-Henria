import React from 'react';
import { PRESENTATION_TEXT } from '../constants';

export const Presentation: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sans text-lg md:text-xl text-stone-600 leading-relaxed font-light italic">
          {PRESENTATION_TEXT}
        </p>
      </div>
    </section>
  );
};