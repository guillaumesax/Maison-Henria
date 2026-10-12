import React from 'react';
import { PartnerPageLayout } from './PartnerPageLayout';

export const MasEylieuxPage: React.FC = () => {
  return (
    <PartnerPageLayout
      eyebrow="Lieu de réception · Saint-Montan"
      title="Le Mas d’Eylieux — Un domaine de charme en Ardèche du Sud"
      introduction="Un lieu pour se retrouver, célébrer et partager de beaux moments."
      heroImage="/partenaire-mas-deylieux-paysage.jpg"
      heroImageAlt="Le paysage naturel du Mas d’Eylieux en Ardèche du Sud"
      websiteUrl="https://www.lemasdeylieux.fr/fr/mariage-intimiste-ardeche"
      websiteLabel="Le Mas d’Eylieux"
    >
      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-lg font-light leading-[1.85] text-stone-600">
            <p>
              À Saint-Montan, au cœur de l’Ardèche du Sud, Le Mas d’Eylieux accueille familles, groupes d’amis et couples souhaitant organiser un événement dans un cadre naturel et authentique.
            </p>
            <p>
              Implanté sur un domaine de 40 hectares, entre jardins, terrasses et paysages ardéchois, ce lieu conjugue le charme de la campagne et la convivialité des retrouvailles.
            </p>
          </div>

          <figure className="my-12 overflow-hidden rounded-sm md:my-16">
            <img
              src="/partenaire-mas-deylieux-jardin.jpg"
              alt="Bâtiment en pierre et jardin du Mas d’Eylieux"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>

          <h2 className="font-serif text-3xl text-henria-dark md:text-4xl">Six gîtes pour réunir ses proches</h2>
          <div className="mt-6 space-y-6 text-lg font-light leading-[1.85] text-stone-600">
            <p>Le Mas d’Eylieux dispose de six gîtes indépendants, chacun équipé de sa propre cuisine et de sa salle d’eau.</p>
            <p>Le domaine propose 21 couchages standards, avec une capacité pouvant atteindre 25 personnes grâce à des couchages d’appoint, selon la configuration retenue.</p>
            <p>Cette organisation permet à chacun de préserver son intimité tout en partageant les espaces extérieurs et les moments de convivialité.</p>
          </div>
        </div>

        <div className="mx-auto my-12 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 md:my-20 md:gap-6">
          <img
            src="/partenaire-mas-deylieux-gite.jpg"
            alt="Un gîte en pierre dans le jardin du Mas d’Eylieux"
            loading="lazy"
            className="aspect-[4/5] h-full w-full rounded-sm object-cover"
          />
          <img
            src="/partenaire-mas-deylieux-roses.jpg"
            alt="Rosiers en fleurs devant les murs de pierre du Mas d’Eylieux"
            loading="lazy"
            className="aspect-[4/5] h-full w-full rounded-sm object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl text-henria-dark md:text-4xl">Mariages intimistes et événements privés</h2>
          <div className="mt-6 space-y-6 text-lg font-light leading-[1.85] text-stone-600">
            <p>Pour un mariage en petit comité, un anniversaire ou une réunion de famille, Le Mas d’Eylieux offre la possibilité de profiter d’un même lieu pour se réunir et héberger ses proches.</p>
            <p>Le domaine fonctionne en gestion libre : les organisateurs conservent la liberté de choisir leur traiteur et les autres professionnels intervenant lors de leur événement.</p>
            <p>Une formule particulièrement appréciable pour imaginer une réception personnalisée, adaptée à ses envies et à son budget.</p>
          </div>

          <div className="mt-12 border-l-2 border-henria-gold bg-stone-50 px-7 py-8 md:mt-16 md:px-10">
            <h2 className="font-serif text-2xl text-henria-dark md:text-3xl">Une belle adresse à découvrir</h2>
            <p className="mt-4 text-lg font-light leading-[1.8] text-stone-600">
              Maison Henria est heureuse de faire découvrir Le Mas d’Eylieux aux personnes qui recherchent un lieu de réception ou un hébergement de groupe en Ardèche du Sud.
            </p>
          </div>
        </div>
      </article>
    </PartnerPageLayout>
  );
};
