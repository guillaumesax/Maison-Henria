import React from 'react';
import { BRAND_NAME, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const administrativeItems = [
  ['Dénomination sociale', 'À compléter'],
  ['Forme juridique', 'À compléter'],
  ['SIRET', 'À compléter'],
  ['RCS / RM', 'À compléter si applicable'],
  ['Numéro de TVA intracommunautaire', 'À compléter si applicable'],
  ['Adresse du siège social', 'À compléter'],
  ['Responsable de la publication', 'À compléter'],
];

export const LegalNotice: React.FC = () => {
  return (
    <section id="mentions-legales" className="bg-henria-dark text-stone-400 border-t border-white/5 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-henria-gold font-bold mb-4">Informations légales</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Mentions légales</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-sm leading-relaxed">
            <div>
              <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Éditeur du site</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-stone-500">Nom commercial</dt>
                  <dd className="text-stone-300">{BRAND_NAME}</dd>
                </div>
                {administrativeItems.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-stone-500">{label}</dt>
                    <dd className="text-stone-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Contact</h3>
                <p>
                  Email : <a className="text-stone-300 hover:text-henria-gold transition-colors" href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                </p>
                <p>
                  Téléphone : <a className="text-stone-300 hover:text-henria-gold transition-colors" href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}>{PHONE_NUMBER}</a>
                </p>
              </div>

              <div>
                <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Hébergement</h3>
                <p>Ce site est hébergé par GitHub Pages, service édité par GitHub, Inc.</p>
                <p>Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>
              </div>
            </div>

            <div>
              <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Propriété intellectuelle</h3>
              <p>
                L’ensemble des contenus présents sur ce site, notamment les textes, images, photographies, éléments graphiques,
                logo et identité visuelle, sont protégés par le droit de la propriété intellectuelle. Toute reproduction,
                représentation ou réutilisation sans autorisation préalable est interdite.
              </p>
            </div>

            <div>
              <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Données personnelles</h3>
              <p>
                Le formulaire de demande de devis ouvre l’application email de l’utilisateur avec un message prérempli.
                Aucune donnée personnelle n’est stockée par le site. Les informations envoyées par email sont utilisées
                uniquement pour répondre aux demandes de contact et de devis.
              </p>
            </div>

            <div>
              <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Cookies</h3>
              <p>
                Le site ne dépose pas de cookies de mesure d’audience ou de publicité. Si des outils de suivi sont ajoutés
                ultérieurement, cette section devra être mise à jour.
              </p>
            </div>

            <div>
              <h3 className="text-stone-200 uppercase tracking-[0.25em] text-[10px] font-bold mb-4">Médiation de la consommation</h3>
              <p>
                Informations relatives au médiateur de la consommation à compléter si l’activité s’adresse à des consommateurs particuliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
