import React from 'react';
import { PartnerPageLayout } from './PartnerPageLayout';

export const GuillaumeSaxPage: React.FC = () => {
  return (
    <PartnerPageLayout
      eyebrow="Musique live · Mariages & événements"
      title="GuillaumeSax — Le saxophone au cœur de vos plus beaux moments"
      introduction="Une présence musicale élégante, vivante et sur mesure, du cocktail à la soirée."
      heroImage="/partenaire-guillaumesax-ambiance.jpg"
      heroImageAlt="GuillaumeSax joue au milieu des invités pendant un mariage"
      websiteUrl="https://guillaumesax.fr/"
      websiteLabel="GuillaumeSax"
    >
      <article className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-henria-gold">Une ambiance qui vous ressemble</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-henria-dark md:text-4xl">La musique comme un fil conducteur</h2>
            <div className="mt-6 space-y-6 text-lg font-light leading-[1.85] text-stone-600">
              <p>
                Saxophoniste professionnel, Guillaume accompagne les mariages, cocktails, soirées privées et événements professionnels avec une approche à la fois élégante et spontanée.
              </p>
              <p>
                Sa musique s’adapte au rythme de chaque moment : douce et chaleureuse pour accueillir les invités, solaire pendant le cocktail, puis résolument festive lorsque la soirée s’anime.
              </p>
              <p>
                Du jazz à l’électro, chaque intervention est pensée avec soin pour trouver le ton juste et offrir aux invités un souvenir vraiment vivant.
              </p>
            </div>
          </div>
          <img
            src="/partenaire-guillaumesax-portrait.jpg"
            alt="GuillaumeSax joue du saxophone lors d’un événement"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover object-center"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6 md:mt-24">
          <div className="bg-henria-dark px-7 py-10 text-center text-white md:px-14 md:py-14">
            <p className="font-serif text-2xl italic leading-relaxed md:text-4xl">
              « Une musique vivante, proche des invités, pour donner à chaque événement sa couleur. »
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              ['Cérémonie', 'Une présence sensible pour souligner les instants forts.'],
              ['Cocktail', 'Un répertoire élégant et chaleureux au plus près des invités.'],
              ['Soirée', 'Une énergie live qui rejoint le DJ et invite naturellement à danser.'],
            ].map(([title, copy]) => (
              <div key={title} className="border-t border-henria-gold pt-5">
                <h3 className="font-serif text-2xl text-henria-dark">{title}</h3>
                <p className="mt-3 font-light leading-relaxed text-stone-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </PartnerPageLayout>
  );
};
