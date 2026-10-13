import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const partners = [
  {
    name: 'Le Mas d’Eylieux',
    category: 'Lieu de réception · Ardèche du Sud',
    description:
      'À Saint-Montan, six gîtes indépendants réunis sur un domaine de 40 hectares pour accueillir ses proches et célébrer en toute liberté.',
    image: '/partenaire-mas-deylieux-paysage.jpg',
    href: '/le-mas-deylieux.html',
    imagePosition: 'center',
  },
  {
    name: 'GuillaumeSax',
    category: 'Musique live · Mariages & événements',
    description:
      'Une présence musicale élégante et généreuse au saxophone, du cocktail à la soirée, pour créer une ambiance qui ressemble à chaque événement.',
    image: '/partenaire-guillaumesax-ambiance.jpg',
    href: '/guillaumesax.html',
    imagePosition: 'center',
  },
];

export const PartnerNetwork: React.FC = () => {
  return (
    <section id="reseau" className="bg-[#f4f0e8] py-8 md:py-10 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-henria-gold">
            Les belles adresses
          </span>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-henria-dark">
            Notre réseau de professionnels
          </h2>
          <p className="mt-3 text-sm font-light leading-relaxed text-stone-600">
            Pour vous accompagner dans l’organisation de vos événements, Maison Henria vous fait découvrir des professionnels et des lieux de réception de la région.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              className="group overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-stone-200/70 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-henria-gold"
              aria-label={`Découvrir ${partner.name}`}
            >
              <div className="aspect-[3/1] overflow-hidden bg-stone-200">
                <img
                  src={partner.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: partner.imagePosition }}
                />
              </div>
              <div className="min-w-0 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-henria-gold">
                  {partner.category}
                </p>
                <div className="mt-2 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg text-henria-dark">{partner.name}</h3>
                  <ArrowUpRight className="mt-1 shrink-0 text-henria-gold" size={16} />
                </div>
                <p className="mt-2 text-xs font-light leading-relaxed text-stone-600">{partner.description}</p>
                <span className="mt-3 inline-block border-b border-henria-gold pb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-henria-dark">
                  Découvrir son univers
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
