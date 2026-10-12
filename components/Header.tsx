import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "/logo-maison-henria.png";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <a href="/" className="flex items-center group" aria-label="Accueil Maison Henria">
        <div className={`transition-all duration-500 flex items-center overflow-hidden ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-24'}`}>
          <img 
            src={logoUrl} 
            alt={BRAND_NAME} 
            loading="eager"
            decoding="async"
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
      
      <nav className="hidden md:flex flex-wrap justify-end gap-5 lg:gap-8 items-center" aria-label="Navigation principale">
        <a
          href="/#plateaux-repas"
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled
              ? 'text-henria-dark border-henria-gold'
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Plateaux repas
        </a>
        <a
          href="/#evenementiel"
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled
              ? 'text-henria-dark border-henria-gold'
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Événementiel
        </a>
        <a
          href="/#contact"
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled
              ? 'text-henria-dark border-henria-gold'
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Contact & Devis
        </a>
        <a
          href="/#reseau"
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold pb-1 border-b-2 transition-all duration-300 ${
            isScrolled
              ? 'text-henria-dark border-henria-gold'
              : 'text-henria-dark md:text-stone-700 border-transparent hover:border-henria-gold'
          }`}
        >
          Notre réseau
        </a>
      </nav>

      <button
        type="button"
        className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
          isScrolled || isMenuOpen
            ? 'border-stone-200 bg-white text-henria-dark'
            : 'border-white/70 bg-white/80 text-henria-dark backdrop-blur-sm'
        }`}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
        aria-controls="menu-mobile"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>

      <div
        id="menu-mobile"
        className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] md:hidden overflow-hidden rounded-sm bg-white shadow-xl ring-1 ring-stone-200 transition-all duration-300 ${
          isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="Navigation mobile">
          {[
            ['Plateaux repas', '/#plateaux-repas'],
            ['Événementiel', '/#evenementiel'],
            ['Notre réseau', '/#reseau'],
            ['Contact & Devis', '/#contact'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-stone-100 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-henria-dark last:border-0 hover:bg-stone-50"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
