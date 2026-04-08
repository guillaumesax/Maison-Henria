import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const logoUrl =
    'https://filedn.eu/lCrcyhrkkvYjfBEUTex82pz/Matthieu/81B744F8-354C-4635-914E-0CD7B8FAA0BC.PNG';
  const bgImageUrl =
    'https://filedn.eu/lCrcyhrkkvYjfBEUTex82pz/Matthieu/Gemini_Generated_Image_9bc4eo9bc4eo9bc4.png';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxScale = 1 + scrollY * 0.0003;

  return (
    <section className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center bg-white">
      {/* Background avec Parallaxe Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white/92 z-10"></div>
        <div
          className="w-full h-full will-change-transform"
          style={{
            transform: `scale(${parallaxScale})`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src={bgImageUrl}
            alt="Atmosphère Maison Henria"
            className="w-full h-full object-cover grayscale-[0.3] opacity-15"
          />
        </div>
      </div>

      {/* Contenu - Centré verticalement dans le h-screen */}
      <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
        {/* Logo - Taille premium conservée */}
        <div className="mb-0 opacity-0 animate-[logoEntrance_1.2s_ease-out_forwards]">
          <img
            src={logoUrl}
            alt="Maison Henria - Traiteur"
            className="w-72 md:w-[480px] lg:w-[580px] h-auto select-none animate-[logoBreathe_8s_ease-in-out_infinite_1.2s]"
          />
        </div>

        {/* Bloc inférieur : Texte + Boutons */}
        <div className="flex flex-col items-center -mt-12 md:-mt-16">
          {/* Phrase d'accroche - Rapprochée pour l'unité visuelle */}
          <div className="max-w-xl mx-auto mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.3s]">
            <p className="text-stone-500 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide">
             Bientôt Disponible : Plateaux repas & prestations traiteur d&apos;exception à Montélimar.
              <br />
              <span className="text-base md:text-lg italic opacity-80">Cuisine soignée, élaborée à partir de produit frais et locaux.</span>
            </p>
          </div>

          {/* Boutons d'appel à l'action - Désormais visibles dès l'arrivée */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.6s] pb-4">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full sm:w-auto flex items-center justify-center px-12 py-3 bg-henria-dark text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-henria-gold transition-all duration-300 active:scale-95 shadow-lg leading-normal"
            >
              Appeler
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="w-full sm:w-auto flex items-center justify-center px-12 py-3 border-2 border-henria-dark text-henria-dark text-[10px] uppercase tracking-[0.4em] font-bold hover:border-henria-gold hover:text-henria-gold transition-all duration-300 active:scale-95 leading-normal"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoEntrance {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes logoBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
};
