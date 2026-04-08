import React from 'react';

export const Events: React.FC = () => {
  return (
    <section id="evenementiel" className="py-12 md:py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 md:order-1">
          <span className="text-[10px] uppercase tracking-[0.4em] text-henria-gold font-bold">Événementiel</span>
          <h2 className="font-serif text-3xl md:text-4xl text-henria-dark leading-tight">Vos moments sur mesure</h2>
          <p className="text-stone-500 leading-relaxed text-lg font-light">
            Nous proposons également des prestations événementielles sur mesure : mariages, baptêmes, anniversaires, événements professionnels ainsi que des cours de cuisine à domicile pour partager notre passion.
          </p>
          <p className="text-stone-500 leading-relaxed text-lg font-light pt-2">
            Chaque prestation est pensée et accompagnée avec un haut niveau d’exigence, rendu possible par un nombre volontairement limité d’événements.
          </p>
        </div>
        <div className="aspect-video md:aspect-[4/3] overflow-hidden md:order-2 shadow-sm rounded-sm">
           <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" 
            alt="Événementiel Maison Henria" 
            className="w-full h-full object-cover grayscale-[0.2]"
           />
        </div>
      </div>
    </section>
  );
};