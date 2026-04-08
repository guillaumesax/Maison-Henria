import React from 'react';
import { EXPERIENCE_ITEMS } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="group">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-6 group-hover:text-stone-900 transition-colors duration-500">
                0{idx + 1} / {item.keyword}
              </span>
              <h3 className="font-serif text-2xl text-stone-900 mb-4">{item.keyword}</h3>
              <p className="text-stone-500 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};