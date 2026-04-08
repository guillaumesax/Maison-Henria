import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="bg-primary-950 text-stone-200 py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        
        {/* Info & CTA Direct */}
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-white">
              Planifier votre prochain déjeuner.
            </h2>
            <p className="text-stone-400 font-light text-lg max-w-md">
              Nous sommes à votre écoute pour organiser vos réceptions quotidiennes ou événements exceptionnels.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="group block">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Appeler</span>
              <span className="text-xl md:text-2xl font-serif text-white group-hover:text-stone-300 transition-colors">
                {PHONE_NUMBER}
              </span>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="group block">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-2">Écrire</span>
              <span className="text-xl md:text-2xl font-serif text-white group-hover:text-stone-300 transition-colors">
                {EMAIL_ADDRESS}
              </span>
            </a>
          </div>
        </div>

        {/* Mini Formulaire */}
        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-white/10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <h3 className="font-serif text-3xl text-white mb-4">Merci.</h3>
              <p className="text-stone-400">Nous reviendrons vers vous sous peu.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-8">
                <input 
                  type="text" 
                  placeholder="Nom & Entreprise" 
                  required
                  className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-stone-600 font-serif text-lg"
                />
                <input 
                  type="text" 
                  placeholder="Email ou Téléphone" 
                  required
                  className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-stone-600 font-serif text-lg"
                />
                <textarea 
                  placeholder="Votre projet (date, convives...)" 
                  rows={2}
                  className="w-full bg-transparent border-b border-stone-700 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-stone-600 font-serif text-lg resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-4 bg-white text-primary-950 font-bold uppercase tracking-widest text-[10px] hover:bg-stone-200 transition-colors"
              >
                Envoyer la demande
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};