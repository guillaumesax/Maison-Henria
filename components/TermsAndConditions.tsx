import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="border-t border-stone-700/70 pt-8 md:pt-10">
    <h2 className="font-serif text-2xl md:text-3xl text-white mb-5">{title}</h2>
    <div className="space-y-4 text-sm leading-relaxed">{children}</div>
  </section>
);

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc space-y-1 pl-5 marker:text-henria-gold">{children}</ul>
);

export const TermsAndConditions: React.FC = () => {
  return (
    <main className="min-h-screen bg-henria-dark text-stone-400 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-3 mb-12 text-[10px] uppercase tracking-[0.3em]">
          <a href="/" className="text-stone-400 hover:text-henria-gold transition-colors">← Retour à l’accueil</a>
          <a href="/mentions-legales.html" className="text-stone-400 hover:text-henria-gold transition-colors">Mentions légales</a>
        </nav>

        <header className="mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-henria-gold font-bold mb-4">Maison Henria</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Conditions générales de vente</h1>
        </header>

        <div className="space-y-10 md:space-y-12">
          <Section title="1. Identification">
            <List>
              <li><strong className="text-stone-200">Nom commercial :</strong> Maison Henria</li>
              <li><strong className="text-stone-200">Forme juridique :</strong> EURL</li>
              <li><strong className="text-stone-200">Siège social :</strong> 8 avenue du Teil, 07400 Rochemaure</li>
              <li><strong className="text-stone-200">SIRET :</strong> 10743333600016</li>
              <li><strong className="text-stone-200">Email :</strong> contact@maisonhenria.fr</li>
              <li><strong className="text-stone-200">Téléphone :</strong> 07 59 75 55 79</li>
            </List>
          </Section>

          <Section title="2. Objet">
            <p>Les présentes CGV régissent :</p>
            <List>
              <li>la vente de plateaux repas (livraison / emport) ;</li>
              <li>les prestations traiteur événementielles sur devis.</li>
            </List>
          </Section>

          <Section title="3. Produits">
            <List>
              <li>Cuisine élaborée à partir de produits bruts.</li>
              <li>Les préparations peuvent inclure des éléments non faits maison.</li>
              <li>Menus susceptibles d’évoluer selon les approvisionnements.</li>
              <li>Photos non contractuelles.</li>
              <li>Liste des allergènes disponible sur demande.</li>
            </List>
          </Section>

          <Section title="4. Prix">
            <List>
              <li>Prix en euros TTC.</li>
              <li>TVA selon réglementation en vigueur.</li>
              <li>Livraison à Montélimar offerte à partir de 50 €.</li>
              <li>Hors zone : facturation selon distance et conditions annoncées.</li>
            </List>
          </Section>

          <Section title="5. Commande — Plateaux repas">
            <List>
              <li>Commande via site, email ou téléphone.</li>
              <li>Délais : jusqu’à 15 h la veille ; après, uniquement par téléphone selon disponibilité.</li>
              <li>Commande validée après confirmation, écrite ou orale.</li>
            </List>
          </Section>

          <Section title="6. Commande — Événementiel">
            <List>
              <li>Devis valable 14 jours.</li>
              <li>Validation par retour signé ou confirmation écrite par email.</li>
              <li><strong className="text-stone-200">Acompte :</strong> 30 % à la validation.</li>
              <li><strong className="text-stone-200">Solde :</strong> à réception de facture ou au plus tard le jour de la prestation.</li>
            </List>
          </Section>

          <Section title="7. Paiement">
            <List>
              <li>Moyens acceptés : virement, carte bancaire et espèces.</li>
            </List>
            <div>
              <h3 className="text-stone-200 font-bold mb-2">Clients particuliers</h3>
              <List><li>Paiement à la commande ou à la livraison.</li></List>
            </div>
            <div>
              <h3 className="text-stone-200 font-bold mb-2">Clients professionnels</h3>
              <List>
                <li>Paiement selon conditions convenues.</li>
                <li>Délai maximum : 30 jours.</li>
              </List>
            </div>
            <div>
              <h3 className="text-stone-200 font-bold mb-2">Retard de paiement (B2B)</h3>
              <List>
                <li>Pénalités légales.</li>
                <li>Indemnité forfaitaire de 40 €.</li>
              </List>
            </div>
          </Section>

          <Section title="8. Modification / Annulation">
            <div>
              <h3 className="text-stone-200 font-bold mb-2">Plateaux repas</h3>
              <List>
                <li>Gratuit jusqu’à 15 h la veille.</li>
                <li>Après : facturation possible.</li>
              </List>
            </div>
            <div>
              <h3 className="text-stone-200 font-bold mb-2">Événementiel</h3>
              <List>
                <li>Nombre définitif de convives à confirmer au plus tard 7 jours avant l’événement.</li>
                <li>Acompte conservé dès validation.</li>
                <li>Annulation &gt; 30 jours : acompte acquis à Maison Henria.</li>
                <li>Annulation &lt; 30 jours : facturation des frais engagés et des commandes non annulables.</li>
                <li>Annulation &lt; 7 jours : facturation totale ou quasi totale.</li>
                <li>Toute perte, casse ou détérioration anormale du matériel mis à disposition pourra être facturée au client sur la base de sa valeur de remplacement.</li>
              </List>
            </div>
            <p>Toute heure supplémentaire demandée par le client ou rendue nécessaire du fait d’un retard dans le déroulement de l’événement sera facturée :</p>
            <List>
              <li>Personnel de service : 35 € HT par heure entamée et par personne.</li>
              <li>Personnel de cuisine : 40 € HT par heure entamée et par personne.</li>
            </List>
          </Section>

          <Section title="9. Livraison">
            <List>
              <li>Livraison selon tournée optimisée.</li>
              <li>Horaires indicatifs.</li>
              <li>Le client doit être présent.</li>
              <li>En cas d’absence, la commande est considérée comme livrée et aucun remboursement ne pourra être effectué.</li>
            </List>
          </Section>

          <Section title="10. Droit de rétractation">
            <p>Le droit de rétractation n’est pas applicable aux produits alimentaires périssables.</p>
          </Section>

          <Section title="11. Responsabilité">
            <p>Maison Henria ne peut être tenue responsable en cas de :</p>
            <List>
              <li>retard indépendant de sa volonté ;</li>
              <li>force majeure ;</li>
              <li>mauvaise conservation après livraison.</li>
            </List>
          </Section>

          <Section title="12. Hygiène et conservation">
            <List>
              <li>Produits à consommer rapidement.</li>
              <li>Respect de la chaîne du froid recommandé.</li>
              <li>Responsabilité transférée après livraison.</li>
            </List>
          </Section>

          <Section title="13. Données personnelles">
            <List>
              <li>Données utilisées pour la gestion des commandes et la communication commerciale.</li>
              <li>Droit d’accès, de modification et de suppression sur demande.</li>
            </List>
          </Section>

          <Section title="14. Litiges">
            <List>
              <li>Médiateur : [en attente].</li>
              <li>Tribunal compétent : siège social.</li>
            </List>
          </Section>

          <Section title="15. Acceptation">
            <p>Toute commande implique l’acceptation des présentes CGV.</p>
          </Section>
        </div>
      </div>
    </main>
  );
};
