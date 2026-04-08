
import React from 'react';
import { MEAL_TRAYS_TEXT, MEAL_FORMULAS, MEAL_OPTIONS, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const MealTrays: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-stone-200 shadow-sm rounded-sm">
           <img 
            src="https://filedn.eu/lCrcyhrkkvYjfBEUTex82pz/Matthieu/visuel-plateau.png" 
            alt="Plateau Repas Maison Henria" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-henria-dark leading-tight">Plateaux Repas Complet</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-henria-gold font-bold">Un menu différent chaque jour</p>
            <p className="text-stone-500 leading-relaxed text-lg font-light">
              {MEAL_TRAYS_TEXT}
            </p>
          </div>

          <div className="space-y-4">
            {MEAL_FORMULAS.map((formula, idx) => (
              <div key={idx} className="flex justify-between items-end border-b border-stone-200 pb-2">
                <div>
                  <h3 className="font-serif text-lg text-henria-dark">{formula.name}</h3>
                  <p className="text-stone-400 text-xs italic">{formula.description}</p>
                </div>
                <span className="font-serif text-xl text-henria-dark">{formula.price}€ <span className="text-[10px] uppercase tracking-wider text-stone-400">TTC</span></span>
              </div>
            ))}
          </div>

          <div className="bg-white/50 p-4 rounded-sm border border-stone-100 space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Option & Boissons</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {MEAL_OPTIONS.map((option, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-stone-600">{option.name}</span>
                  <span className="font-serif text-henria-dark">{option.price}€</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-1">
            <p className="font-serif italic text-xl text-henria-dark">Livraison offerte sur Montélimar</p>
            <p className="text-stone-500 text-sm italic font-light">
              minimum de commande de 50€ et selon tournée optimisée. En dehors de Montélimar, frais de livraisons en supplément.
            </p>
          </div>

          <div className="pt-3 space-y-4 border-t border-stone-100">
            <p className="text-stone-500 text-sm font-light">
              N’hésitez pas à nous contacter pour prendre connaissance de notre menu du jour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="px-6 py-2.5 bg-henria-gold text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity text-center">Appeler</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFrAYVjLxIiOXI23RmhrBRo5GALTt73oknKaSAoxDnC3TMuA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-henria-gold text-henria-gold text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-henria-gold hover:text-white transition-all text-center">Commander</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
