
import React from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, BRAND_NAME } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-henria-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 uppercase tracking-tighter">{BRAND_NAME}</h2>
            <div className="space-y-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="block group">
                <span className="block text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-1">Téléphone</span>
                <span className="text-xl md:text-2xl font-serif group-hover:text-henria-gold transition-colors">{PHONE_NUMBER}</span>
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="block group">
                <span className="block text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-1">Email</span>
                <span className="text-xl md:text-2xl font-serif group-hover:text-henria-gold transition-colors">{EMAIL_ADDRESS}</span>
              </a>
            </div>
            
            <div className="flex gap-6 mt-10">
              <a href="https://www.facebook.com/profile.php?id=61582188444889" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors uppercase text-[9px] tracking-widest">
                Facebook
              </a>
              <a href="https://www.instagram.com/maison.henria/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors uppercase text-[9px] tracking-widest">
                Instagram
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-6 md:p-10 border border-white/10 rounded-sm">
            <h3 className="font-serif text-xl md:text-2xl mb-4">Demande de devis</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nom complet" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-henria-gold transition-colors placeholder:text-stone-600 text-sm" />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-henria-gold transition-colors placeholder:text-stone-600 text-sm" />
              <textarea placeholder="Votre projet" rows={2} className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-henria-gold transition-colors placeholder:text-stone-600 resize-none text-sm"></textarea>
              <button type="submit" className="w-full py-3.5 bg-henria-gold text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-henria-dark transition-all">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
