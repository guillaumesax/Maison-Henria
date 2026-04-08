import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://filedn.eu/lCrcyhrkkvYjfBEUTex82pz/Matthieu/81B744F8-354C-4635-914E-0CD7B8FAA0BC.PNG";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <a href="#" className="flex items-center group">
        <div className={`transition-all duration-500 flex items-center overflow-hidden ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-24'}`}>
          <img 
            src={logoUrl} 
            alt={BRAND_NAME} 
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
      
      <nav className="flex gap-4 md:gap-8 items-center">
        <button 
          onClick={() => document.getElementById('evenementiel')?.scrollIntoView({ behavior: 'smooth' })}
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled 
              ? 'text-henria-dark border-henria-gold' 
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Événementiel
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled 
              ? 'text-henria-dark border-henria-gold' 
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Contact & Devis
        </button>
      </nav>
    </header>
  );
};