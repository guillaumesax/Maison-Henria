import React from 'react';
import { ESSENTIALS } from '../constants';

export const Essentials: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-1">
          {ESSENTIALS.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-200 group hover:bg-white transition-colors px-4">
              <span className="text-xs uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 transition-colors">
                {item.label}
              </span>
              <span className="font-serif text-xl md:text-2xl text-stone-800 mt-2 md:mt-0">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};