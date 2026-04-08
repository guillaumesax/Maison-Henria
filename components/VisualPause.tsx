import React from 'react';

export const VisualPause: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?q=80&w=2669&auto=format&fit=crop" 
          alt="Plateau Repas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/20"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-white tracking-widest uppercase">
          Entrée. Plat. Dessert.
        </h2>
      </div>
    </section>
  );
};