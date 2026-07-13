import React from 'react';
import { BRAND_NAME, ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-henria-dark py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
          <div>
            <p className="text-stone-300 mb-4 tracking-[0.4em]">{BRAND_NAME}</p>
            <p>{ADDRESS}</p>
          </div>
          <div>
            <p className="text-stone-300 mb-4">Nos Services</p>
            <p className="mb-2">Plateaux repas Montélimar</p>
            <p>Prestations sur devis</p>
          </div>
          <p className="text-stone-500 leading-relaxed">
            *L’abus d’alcool est dangereux pour la santé, à consommer avec modération. La vente d’alcool est interdite aux mineurs de moins de 18 ans.
          </p>
          <div className="flex flex-col md:items-end gap-2">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <p className="text-stone-700 mt-4 italic">© {new Date().getFullYear()} Maison Henria — Traiteur</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
