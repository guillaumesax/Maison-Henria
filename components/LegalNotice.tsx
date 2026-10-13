import React from 'react';
import { BRAND_NAME, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const administrativeItems = [
  ['Dénomination sociale', 'MAISON HENRIA'],
  ['Forme juridique', 'EURL'],
  ['Capital social', '1 000 €'],
  ['SIREN', '107 433 336'],
  ['SIRET', '107 433 336 00016'],
  ['Code APE', '5621Z — Services des traiteurs'],
  ['RCS', 'Aubenas — numéro à compléter après immatriculation'],
  ['Numéro de TVA intracommunautaire', 'À compléter si applicable'],
  ['Adresse du siège social', '8, avenue du Teil, 07400 Rochemaure'],
  ['Gérant', 'M. MOSTAFA Matthieu Sylvain Éric'],
  ['Responsable de la publication', 'À compléter'],
];

export const LegalNotice: React.FC = () => {
  return (
    <main className="min-h-screen bg-henria-dark text-stone-400 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 mb-12 text-[10px] uppercase tracking-[0.3em]" aria-label="Navigation des pages légales">
            <a href="/" className="text-stone-400 hover:text-henria-gold focus-visible:text-henria-gold transition-colors">← Retour à l’accueil</a>
            <a href="/cgv.html" className="text-stone-400 hover:text-henria-gold focus-visible:text-henria-gold transition-colors">CGV</a>
          </nav>
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
                Les formulaires de demande ouvrent l’application email de l’utilisateur avec un message prérempli.
                Les informations transmises sont utilisées pour les demandes de contact, devis et commandes, leur gestion,
                l’exécution des prestations, la facturation, la comptabilité et le suivi de la relation client. La communication
                commerciale n’est effectuée que lorsqu’elle est autorisée. Sur la page de commande, l’utilisateur peut choisir
                de mémoriser ses coordonnées dans le stockage local de son propre navigateur afin de préremplir une prochaine
                demande. Cette option est facultative et les informations peuvent être effacées à tout moment en la décochant.
                Pour exercer ses droits relatifs à ses données personnelles, il peut écrire à{' '}
                <a className="text-stone-300 hover:text-henria-gold transition-colors" href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>.
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
                Après une réclamation préalable adressée à Maison Henria, les clients consommateurs peuvent saisir gratuitement
                le médiateur de la consommation : CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice,
                49 rue de Ponthieu, 75008 Paris — 01 89 47 00 14 —{' '}
                <a className="text-stone-300 hover:text-henria-gold transition-colors" href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer">www.cm2c.net</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
