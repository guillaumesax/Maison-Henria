import React from 'react';

const Section: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <section className="border-t border-stone-700/70 pt-8 md:pt-10" aria-labelledby={`cgv-${number}`}>
    <h2 id={`cgv-${number}`} className="font-serif text-2xl md:text-3xl text-white mb-5"><span className="text-henria-gold">{number}.</span> {title}</h2>
    <div className="space-y-4 text-sm leading-relaxed">{children}</div>
  </section>
);

export const TermsAndConditions: React.FC = () => (
  <main className="min-h-screen bg-henria-dark text-stone-400 py-16 md:py-20">
    <div className="max-w-4xl mx-auto px-6">
      <nav aria-label="Navigation des pages légales" className="flex flex-wrap gap-x-6 gap-y-3 mb-12 text-[10px] uppercase tracking-[0.3em]">
        <a href="/" className="text-stone-400 hover:text-henria-gold focus-visible:text-henria-gold transition-colors">← Retour à l’accueil</a>
        <a href="/mentions-legales.html" className="text-stone-400 hover:text-henria-gold focus-visible:text-henria-gold transition-colors">Mentions légales</a>
      </nav>
      <header className="border-b border-stone-700/70 pb-10 mb-10 md:mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-henria-gold font-bold mb-4">Maison Henria</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Conditions générales de vente</h1>
        <p className="text-stone-300">Plateaux repas, livraison / emporter et prestations événementielles</p>
        <address className="not-italic mt-6 text-sm leading-relaxed">Maison Henria — EURL au capital de 1 000 €<br />8 avenue du Teil — 07400 Rochemaure<br />SIRET : 107 433 336 00016<br /><a className="hover:text-henria-gold transition-colors" href="mailto:contact@maisonhenria.fr">contact@maisonhenria.fr</a> — 07 59 75 55 79</address>
      </header>
      <div className="space-y-10 md:space-y-12">
        <Section number={1} title="Champ d’application">
          <p>Les présentes Conditions Générales de Vente (CGV) régissent les ventes et prestations réalisées par Maison Henria auprès de clients particuliers ou professionnels, notamment : la vente de plateaux repas en livraison ou à emporter, ainsi que les prestations traiteur événementielles sur devis (mariages, anniversaires, réceptions privées, cocktails, inaugurations, séminaires, repas d’entreprise et événements professionnels).</p>
          <p>Les CGV applicables sont celles portées à la connaissance du client avant la conclusion du contrat. Toute commande, signature ou acceptation écrite d’un devis implique l’acceptation des présentes CGV.</p>
          <p>Pour les prestations événementielles, lorsqu’une version spécifique des CGV est jointe au devis, celle-ci prévaut sur les présentes CGV en cas de contradiction. Les conditions particulières figurant sur un devis accepté prévalent également sur les présentes CGV.</p>
          <p>Les dispositions expressément réservées aux consommateurs ne s’appliquent qu’aux clients ayant la qualité de consommateur au sens de la réglementation applicable.</p>
        </Section>
        <Section number={2} title="Produits, menus et approvisionnements">
          <p>Maison Henria propose une cuisine élaborée principalement à partir de produits bruts. Certaines préparations peuvent comporter des éléments non faits maison.</p>
          <p>Les menus sont susceptibles d’évoluer selon les approvisionnements. En cas d’indisponibilité exceptionnelle d’un produit ou d’une matière première, Maison Henria pourra proposer son remplacement par un produit de nature, qualité et gamme comparables. Pour une prestation événementielle, le client sera informé de toute modification substantielle du menu.</p>
          <p>Les photographies, dressages et présentations utilisés à titre d’illustration ne sont pas contractuels et peuvent présenter de légères variations.</p>
        </Section>
        <Section number={3} title="Prix et livraison">
          <p>Les prix sont exprimés en euros TTC, avec application de la TVA selon la réglementation en vigueur. Pour les prestations événementielles, les prix applicables sont ceux figurant sur le devis accepté.</p>
          <p>Pour les plateaux repas, la livraison à Montélimar est offerte à partir de 50 € de commande. Hors zone, la livraison est facturée selon la distance et les conditions annoncées lors de la commande.</p>
          <p>Les prestations ou frais supplémentaires réalisés dans les conditions prévues aux présentes CGV peuvent faire l’objet d’une facturation complémentaire.</p>
        </Section>
        <Section number={4} title="Commande — Plateaux repas">
          <p>Les commandes peuvent être passées via le site internet, par e-mail ou par téléphone.</p>
          <p>Sauf indication contraire communiquée par Maison Henria, les commandes peuvent être passées jusqu’à 15 h la veille. Après cette échéance, elles ne sont acceptées que par téléphone et sous réserve de disponibilité.</p>
          <p>La commande devient ferme après confirmation par Maison Henria, écrite ou orale.</p>
          <p>Toute modification ou annulation d’une commande de plateaux repas est gratuite jusqu’à 15 h la veille. Après cette échéance, tout ou partie de la commande pourra être facturé compte tenu de la production déjà engagée.</p>
        </Section>
        <Section number={5} title="Livraison — Plateaux repas">
          <p>Les livraisons sont organisées selon une tournée optimisée. Les horaires communiqués sont indicatifs et peuvent être affectés par les conditions de circulation ou par tout événement indépendant de la volonté de Maison Henria.</p>
          <p>Le client doit être présent ou avoir prévu une personne habilitée à réceptionner la commande au lieu convenu. En cas d’absence du client empêchant la remise de la commande, celle-ci est considérée comme livrée et aucun remboursement n’est dû.</p>
        </Section>
        <Section number={6} title="Paiement">
          <p>Les moyens de paiement acceptés sont notamment le virement, la carte bancaire et les espèces, sous réserve des moyens proposés au moment de la commande.</p>
          <p>Pour les clients particuliers commandant des plateaux repas, le paiement intervient à la commande ou à la livraison selon les modalités convenues.</p>
          <p>Pour les clients professionnels, le paiement intervient selon les conditions convenues, dans la limite du délai légal applicable.</p>
          <p>Tout retard de paiement d’un client professionnel entraîne de plein droit, dès le lendemain de la date d’échéance et sans rappel préalable, l’application de pénalités calculées sur la base du taux de refinancement de la Banque centrale européenne applicable, majoré de 10 points de pourcentage. Une indemnité forfaitaire de 40 € pour frais de recouvrement est également due pour chaque facture réglée après son échéance. Une indemnisation complémentaire pourra être réclamée lorsque les frais de recouvrement effectivement engagés sont supérieurs à cette somme, sur justificatifs. Aucun escompte n’est accordé en cas de paiement anticipé.</p>
        </Section>
        <Section number={7} title="Devis et réservation — Événementiel">
          <p>Sauf indication contraire, le devis est valable 14 jours à compter de sa date d’émission. L’établissement ou l’envoi d’un devis ne constitue pas une réservation de la date.</p>
          <p>La réservation devient définitive uniquement après acceptation écrite ou signature du devis, acceptation des CGV applicables et versement d’un acompte de 30 % du montant TTC de la prestation. La somme versée constitue expressément un acompte et non des arrhes.</p>
          <p>Sauf disposition particulière mentionnée sur le devis, le solde est payable au plus tard 7 jours calendaires avant la prestation.</p>
          <p>Les frais constatés après la prestation, notamment heures supplémentaires, casse, perte ou détérioration de matériel, font l’objet d’une facture complémentaire payable à réception.</p>
        </Section>
        <Section number={8} title="Nombre définitif de convives — Événementiel">
          <p>Le nombre définitif de convives doit être communiqué par écrit au plus tard 15 jours calendaires avant la prestation. Le client précise, lorsque cela est nécessaire, le nombre d’adultes, d’enfants, de prestataires bénéficiant d’un repas ainsi que les éventuels menus ou régimes alimentaires particuliers.</p>
          <p>À défaut de confirmation à cette échéance, le dernier nombre de convives accepté par écrit sera considéré comme définitif.</p>
          <p>À compter de J-15, toute diminution du nombre de convives n’entraîne aucune diminution du montant facturé. Toute augmentation reste soumise aux capacités de Maison Henria et de ses fournisseurs ; les convives supplémentaires acceptés sont facturés au tarif correspondant.</p>
        </Section>
        <Section number={9} title="Modification de la prestation — Événementiel">
          <p>Toute demande de modification portant notamment sur le menu, le nombre de convives, le lieu, les horaires, le personnel, la vaisselle, le mobilier, le matériel ou l’organisation générale doit être formulée par écrit.</p>
          <p>Maison Henria peut refuser toute modification devenue matériellement impossible ou susceptible de compromettre la qualité ou la bonne exécution de la prestation. Toute modification entraînant un coût supplémentaire fait l’objet d’une adaptation tarifaire.</p>
          <p>Une modification du lieu de réception peut notamment entraîner des frais supplémentaires de déplacement, véhicule, manutention, personnel ou logistique.</p>
        </Section>
        <Section number={10} title="Allergies, intolérances et régimes alimentaires">
          <p>Toute allergie, intolérance ou contrainte alimentaire connue doit être signalée à Maison Henria. Pour les prestations événementielles, cette information doit être communiquée par écrit au plus tard 15 jours avant la prestation.</p>
          <p>Maison Henria prend les précautions adaptées aux informations qui lui ont été transmises. Sauf engagement spécifique expressément accepté, Maison Henria ne peut garantir l’absence absolue de traces d’allergènes, notamment en raison des risques de contamination croisée.</p>
          <p>Maison Henria ne peut être tenue responsable des conséquences résultant d’une allergie, intolérance ou restriction alimentaire qui ne lui aurait pas été préalablement signalée.</p>
        </Section>
        <Section number={11} title="Lieu de réception et conditions techniques — Événementiel">
          <p>Le devis est établi à partir des informations communiquées par le client concernant le lieu de réception et les conditions d’intervention.</p>
          <p>Le client doit permettre à Maison Henria de disposer des accès, autorisations et équipements nécessaires à la bonne réalisation de la prestation, notamment : accès véhicule, zone de déchargement, point d’eau potable, alimentation électrique adaptée, espace de travail suffisant et sécurisé, ainsi que tout équipement ou installation particulière convenu.</p>
          <p>Pour toute réception organisée en extérieur, sous tente ou sous chapiteau, le client doit prévoir des installations adaptées permettant de protéger les personnes, les denrées alimentaires et le matériel contre les conditions météorologiques.</p>
          <p>Si les conditions effectivement rencontrées nécessitent des moyens humains, matériels ou logistiques supplémentaires par rapport aux informations communiquées lors de l’établissement du devis, ceux-ci peuvent faire l’objet d’une facturation complémentaire après information du client. Maison Henria peut refuser toute installation ou utilisation présentant un risque pour les personnes, le matériel ou la sécurité alimentaire.</p>
        </Section>
        <Section number={12} title="Personnel, horaires et heures supplémentaires — Événementiel">
          <p>Les horaires figurant sur le devis déterminent la durée prévue de mise à disposition du personnel.</p>
          <p>Tout dépassement demandé par le client ou rendu nécessaire par un retard dans le déroulement de l’événement non imputable à Maison Henria entraîne une facturation complémentaire.</p>
          <p>Les heures supplémentaires sont facturées : de 6 h à 22 h, 50 € TTC par membre du personnel et par heure entamée ; de 22 h à 6 h, 100 € TTC par membre du personnel et par heure entamée. Le tarif applicable est déterminé par l’heure à laquelle débute l’heure supplémentaire concernée. Toute heure commencée est due.</p>
          <p>Maison Henria reste libre d’organiser les moyens humains nécessaires à la réalisation de la prestation et peut notamment faire intervenir des salariés, extras, prestataires ou sous-traitants qualifiés.</p>
        </Section>
        <Section number={13} title="Matériel, vaisselle, mobilier et équipements — Événementiel">
          <p>Le matériel, la vaisselle, le mobilier et les équipements mis à disposition restent la propriété de Maison Henria ou de ses fournisseurs.</p>
          <p>Les locations de matériel et de vaisselle pouvant devenir définitives auprès des fournisseurs 15 jours avant l’événement, toute diminution ultérieure du nombre de convives n’entraîne aucune diminution des frais déjà engagés.</p>
          <p>Le client est responsable des pertes, casses ou détériorations anormales imputables au client ou à ses invités entre la mise à disposition et la récupération du matériel. L’usure normale ainsi que les dommages imputables à Maison Henria ou à ses intervenants ne sont pas facturés.</p>
          <p>Tout élément perdu, cassé ou anormalement détérioré peut être facturé sur la base de sa valeur de remplacement ou du montant effectivement facturé à Maison Henria par son fournisseur ou loueur.</p>
        </Section>
        <Section number={14} title="Annulation à l’initiative du client — Événementiel">
          <p>Toute annulation doit être notifiée par écrit. Compte tenu de la réservation de la date, du travail préparatoire, de l’organisation du personnel et des engagements pris auprès des fournisseurs, les montants suivants sont dus :</p>
          <div className="overflow-x-auto border border-stone-700/70"><table className="w-full min-w-[32rem] text-left border-collapse"><thead className="bg-white/5 text-stone-200"><tr><th scope="col" className="p-4 font-bold">Date de l’annulation</th><th scope="col" className="p-4 font-bold">Montant dû</th></tr></thead><tbody className="divide-y divide-stone-700/70"><tr><td className="p-4">Plus de 30 jours avant la prestation</td><td className="p-4">30 % du montant TTC</td></tr><tr><td className="p-4">De 30 à 16 jours avant la prestation</td><td className="p-4">50 % du montant TTC</td></tr><tr><td className="p-4">De 15 à 8 jours avant la prestation</td><td className="p-4">75 % du montant TTC</td></tr><tr><td className="p-4">7 jours ou moins avant la prestation</td><td className="p-4">100 % du montant TTC</td></tr></tbody></table></div>
          <p>Les sommes déjà versées sont déduites du montant restant éventuellement dû.</p>
        </Section>
        <Section number={15} title="Report de l’événement">
          <p>Une demande de report ne constitue pas automatiquement une annulation. Maison Henria recherche prioritairement avec le client la possibilité de transférer la prestation sur une nouvelle date.</p>
          <p>Tout report reste soumis aux disponibilités de Maison Henria et de ses fournisseurs. Les prix et conditions peuvent être révisés en fonction de la nouvelle date, des tarifs alors applicables, du nouveau lieu éventuel, des modifications apportées à la prestation et des frais déjà engagés auprès des fournisseurs.</p>
          <p>Le report ne devient définitif qu’après accord écrit entre Maison Henria et le client. À défaut d’accord sur une nouvelle date ou sur les nouvelles conditions de réalisation, la demande est considérée comme une annulation à l’initiative du client et l’article 14 s’applique.</p>
        </Section>
        <Section number={16} title="Annulation à l’initiative de Maison Henria">
          <p>En cas d’annulation définitive de la prestation par Maison Henria pour une cause qui lui est imputable et ne constituant pas un cas de force majeure, l’intégralité des sommes déjà versées par le client est remboursée.</p>
          <p>Pour les clients consommateurs, Maison Henria verse également au client une indemnité équivalente au montant de l’indemnité qui aurait été conservée ou réclamée au client si celui-ci avait annulé la prestation à la même date.</p>
          <p>Maison Henria peut proposer au client une solution alternative ou un prestataire de remplacement. Le client reste libre de l’accepter ou de la refuser.</p>
        </Section>
        <Section number={17} title="Force majeure">
          <p>Aucune des parties ne peut être tenue responsable de l’inexécution de ses obligations lorsqu’elle résulte d’un événement répondant aux conditions légales de la force majeure, c’est-à-dire échappant à son contrôle, qui ne pouvait raisonnablement être prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées.</p>
          <p>En cas d’empêchement temporaire, les parties recherchent prioritairement une solution permettant le report ou l’adaptation de la prestation. Lorsque l’empêchement rend définitivement impossible la réalisation de la prestation, le contrat peut être résilié dans les conditions prévues par la réglementation applicable.</p>
          <p>Le simple changement d’avis du client, une difficulté financière, l’indisponibilité d’un invité ou des conditions météorologiques ordinaires ne constituent pas, à eux seuls, un cas de force majeure.</p>
        </Section>
        <Section number={18} title="Hygiène, conservation et denrées restantes">
          <p>Maison Henria assure la préparation, le transport, la livraison et, le cas échéant, le service des denrées dans le respect des règles d’hygiène applicables.</p>
          <p>Les produits alimentaires doivent être consommés rapidement et conservés conformément aux indications communiquées. À compter de la livraison ou de la remise des denrées au client, celui-ci devient responsable de leurs conditions de conservation.</p>
          <p>Maison Henria ne peut être tenue responsable d’une altération ultérieure résultant notamment d’une rupture de la chaîne du froid, d’une température de conservation inadaptée, d’une mauvaise manipulation ou d’une conservation ou consommation trop tardive.</p>
          <p>À l’issue d’une prestation événementielle, Maison Henria peut refuser de laisser au client certaines préparations lorsque les conditions permettant leur conservation dans des conditions satisfaisantes de sécurité alimentaire ne sont pas réunies.</p>
        </Section>
        <Section number={19} title="Responsabilité">
          <p>Maison Henria répond de la bonne exécution des prestations qui lui sont contractuellement confiées.</p>
          <p>Sa responsabilité ne peut toutefois être engagée pour un dommage directement imputable notamment à une information erronée ou incomplète fournie par le client, au non-respect d’une consigne de conservation ou de sécurité, à une modification de l’organisation effectuée sans son accord, au comportement du client ou d’un invité, à l’intervention d’un prestataire tiers, ou aux installations, locaux ou équipements relevant de la responsabilité d’un tiers.</p>
          <p>Aucune disposition des présentes CGV ne saurait avoir pour effet d’exclure ou de limiter une responsabilité qui ne pourrait légalement l’être.</p>
        </Section>
        <Section number={20} title="Droit de rétractation — Clients consommateurs">
          <p>Le droit de rétractation n’est pas applicable aux produits alimentaires périssables.</p>
          <p>Pour les prestations de restauration devant être fournies à une date ou pendant une période déterminée, le droit de rétractation prévu pour certains contrats conclus à distance ou hors établissement ne peut pas être exercé. La réservation d’une prestation événementielle est donc ferme dans les conditions prévues par le devis et les présentes CGV.</p>
        </Section>
        <Section number={21} title="Données personnelles">
          <p>Les informations recueillies auprès du client sont utilisées pour l’établissement des devis, la gestion des commandes, l’organisation et l’exécution des prestations, la facturation et la comptabilité, le suivi de la relation client, la communication commerciale lorsqu’elle est autorisée et le respect des obligations légales de Maison Henria.</p>
          <p>Le client peut exercer ses droits relatifs à ses données personnelles en écrivant à : <a className="text-stone-200 hover:text-henria-gold transition-colors" href="mailto:contact@maisonhenria.fr">contact@maisonhenria.fr</a>.</p>
        </Section>
        <Section number={22} title="Réclamations et médiation de la consommation">
          <p>Toute réclamation doit préalablement être adressée à Maison Henria, 8 avenue du Teil, 07400 Rochemaure, ou par e-mail à <a className="text-stone-200 hover:text-henria-gold transition-colors" href="mailto:contact@maisonhenria.fr">contact@maisonhenria.fr</a>.</p>
          <p>Pour les clients consommateurs uniquement, en cas d’échec d’une réclamation préalable adressée à Maison Henria, le consommateur peut saisir gratuitement le médiateur de la consommation dont relève Maison Henria : CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice, 49 rue de Ponthieu — 75008 Paris ; téléphone : 01 89 47 00 14 ; site : <a className="text-stone-200 hover:text-henria-gold transition-colors" href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer">www.cm2c.net</a> ; courriel : <a className="text-stone-200 hover:text-henria-gold transition-colors" href="mailto:contact@cm2c.net">contact@cm2c.net</a>.</p>
          <p>Le consommateur peut saisir le médiateur directement en ligne ou par courrier. La médiation de la consommation n’est pas applicable aux litiges opposant Maison Henria à un client professionnel.</p>
        </Section>
        <Section number={23} title="Droit applicable et litiges">
          <p>Les présentes CGV et les contrats conclus avec Maison Henria sont soumis au droit français.</p>
          <p>En cas de différend, les parties recherchent prioritairement une solution amiable. Pour les clients consommateurs, les règles légales de compétence juridictionnelle applicables aux consommateurs demeurent applicables. Pour les clients professionnels, à défaut de résolution amiable, le litige est porté devant la juridiction compétente conformément aux règles légales applicables.</p>
        </Section>
        <Section number={24} title="Acceptation des Conditions Générales de Vente">
          <p>Le client reconnaît avoir eu la possibilité de prendre connaissance des présentes CGV avant la conclusion du contrat.</p>
          <p>Toute commande de plateaux repas implique l’acceptation des présentes CGV. Pour une prestation événementielle, la signature ou l’acceptation écrite du devis, accompagnée du versement de l’acompte prévu, vaut acceptation pleine et entière des CGV applicables.</p>
        </Section>
      </div>
    </div>
  </main>
);
