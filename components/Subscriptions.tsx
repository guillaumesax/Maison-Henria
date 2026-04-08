
import React from 'react';
import { SUBSCRIPTIONS } from '../constants';

export const Subscriptions: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Commandes régulières</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {SUBSCRIPTIONS.map((sub, idx) => (
            <div key={idx} className="p-6 border border-stone-100 hover:border-henria-gold transition-colors flex flex-col items-center text-center space-y-3">
              <h3 className="font-serif text-xl md:text-2xl">{sub.title}</h3>
              <div className="h-px w-6 bg-henria-gold"></div>
              <p className="text-xs text-stone-500 font-light">{sub.freq}</p>
              <p className="text-[10px] text-stone-400 italic">{sub.engagement}</p>
              <div className="pt-2">
                <span className="text-2xl font-serif text-henria-dark">{sub.price} €</span>
                <span className="text-[10px] text-stone-400 ml-1">/ plateau</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
