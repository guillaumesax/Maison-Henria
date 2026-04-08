import React from 'react';
import { MANIFESTO } from '../constants';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-32 md:py-56 bg-stone-50 flex justify-center">
      <div className="max-w-xl px-6">
        <div className="w-12 h-px bg-stone-300 mb-16 mx-auto"></div>
        <p className="font-serif text-xl md:text-2xl text-stone-900 leading-[1.8] text-justify md:text-center italic">
          {MANIFESTO}
        </p>
      </div>
    </section>
  );
};