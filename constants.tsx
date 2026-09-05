
import React from 'react';

export const BRAND_NAME = "Maison Henria";
export const TAGLINE = "Traiteur";
export const PHONE_NUMBER = "07 59 75 55 79";
export const EMAIL_ADDRESS = "contact@maisonhenria.fr";
export const ADDRESS = "Montélimar, Drôme";

export const HERO_HOOK = "Plateaux repas & prestations traiteur à Montélimar. Cuisine soignée, élaborée à partir de produit frais et locaux.";

export const PRESENTATION_TEXT = "Maison Henria – Traiteur est une entreprise indépendante opérant sur Montélimar et ses alentours, spécialisée dans la préparation et la livraison de plateaux repas. Chaque jour, nous proposons une cuisine soignée, élaborée à partir de produits frais et locaux. Notre objectif est d’offrir une solution de restauration fiable, qualitative et accessible.";

export const MEAL_TRAYS_TEXT = "Maison Henria vous accompagne avec une formule de plateau repas complète, livrée chaude ou froide selon les besoins, et pensée pour convenir au plus grand nombre, y compris aux régimes alimentaires spécifiques sur demande.";

export const MEAL_FORMULAS = [
  {
    name: "Plateau Repas Complet",
    description: "Entrée, Plat, Dessert",
    price: "17,90"
  }
];

export const MEAL_OPTIONS = [
  { name: "Option Fromage", price: "3,00" },
  { name: "Bouteille d’eau 50cl", price: "1,00" },
  { name: "Soft 33cl", price: "2,00" },
  { name: "Bouteille de vin* 75cl", price: "11,50" }
];

// The ordering catalogue separates each choice so quantities are unambiguous in the email.
export const ORDER_PRODUCTS: {
  name: string;
  price: string;
  category: string;
  description?: string;
  detailsLabel?: string;
}[] = [
  { name: "Plateau repas", description: "Entrée, plat, dessert", price: "17,90", category: "Nos repas & formules" },
  { name: "Grande salade + dessert", price: "14,90", category: "Nos repas & formules" },
  { name: "Plat du jour", price: "10,90", category: "Nos repas & formules" },
  { name: "Grande salade", price: "10,90", category: "Nos repas & formules" },
  { name: "Dessert du jour", price: "4,50", category: "Nos repas & formules" },
  { name: "Formule plateau + boisson + fromage", description: "Entrée, plat, fromage, dessert et boisson", price: "21,00", category: "Nos repas & formules", detailsLabel: "Boisson(s) souhaitée(s) pour la formule" },
  { name: "Fromage — Comté 18 mois d’affinage", price: "3,00", category: "Pour compléter votre repas" },
  { name: "Eau plate 50cl", price: "1,00", category: "Boissons" },
  { name: "Eau gazeuse 50cl", price: "1,00", category: "Boissons" },
  { name: "Coca 33cl", price: "2,00", category: "Boissons" },
  { name: "Coca zéro 33cl", price: "2,00", category: "Boissons" },
  { name: "Ice tea 33cl", price: "2,00", category: "Boissons" },
  { name: "Vin rouge* — bouteille 75cl", price: "11,50", category: "Vins" },
  { name: "Vin blanc* — bouteille 75cl", price: "11,50", category: "Vins" },
  { name: "Vin rosé* — bouteille 75cl", price: "11,50", category: "Vins" },
];

export const SUBSCRIPTIONS = [
  {
    title: "Hebdomadaire",
    freq: "1 livraison / semaine (jour fixe)",
    engagement: "Engagement 1 mois",
    price: "16,90"
  },
  {
    title: "Bi-hebdomadaire",
    freq: "2 livraisons / semaine",
    engagement: "Engagement 3 mois",
    price: "15,90"
  },
  {
    title: "Quotidienne",
    freq: "3 à 5 livraisons / semaine",
    engagement: "Engagement 3 ou 6 mois",
    price: "15,50"
  }
];

export const STORY_TEXT = "Maison Henria est avant tout une aventure humaine, portée par la passion du métier et par une histoire familiale forte. Son nom rend hommage à une transmission de valeurs : authenticité, partage et unicité.";

// Fix: Added missing ESSENTIAL constants for OfferSection
export const ESSENTIAL_1 = "La cuisine de saison comme point de départ.";
export const ESSENTIAL_2 = "Le geste artisanal comme signature.";
export const ESSENTIAL_3 = "La satisfaction comme seule mesure.";

// Fix: Added missing VISUAL_TEXT for MenuSection
export const VISUAL_TEXT = "La passion du goût, l'élégance du service.";

// Fix: Added missing delivery constants for DeliveryInfo
export const DELIVERY_ZONE = "Montélimar et agglomération (Le Teil, Saulce-sur-Rhône, Malataverne).";
export const ORDER_DEADLINE = "La veille avant 15h";
export const MIN_ORDER = "1 plateau repas";

// Fix: Added missing FAQS for FaqSection
export const FAQS = [
  {
    question: "Comment commander ?",
    answer: "Vous pouvez commander par téléphone ou par e-mail au plus tard la veille avant 15h. Seule notre confirmation par retour de mail valide définitivement votre commande."
  },
  {
    question: "Quels sont les modes de règlement ?",
    answer: "Nous acceptons les virements, cartes bancaires et facturation mensuelle pour les entreprises."
  }
];

// Fix: Added missing MANIFESTO for Manifesto
export const MANIFESTO = "Maison Henria incarne une vision de la gastronomie où la simplicité rencontre l'excellence. Nous croyons que chaque repas, même un plateau de travail, mérite l'attention d'un chef et la fraîcheur du marché.";

// Fix: Added missing EXPERIENCE_ITEMS for Experience
export const EXPERIENCE_ITEMS = [
  { keyword: "Qualité", text: "Des ingrédients frais et locaux pour une saveur authentique." },
  { keyword: "Service", text: "Une logistique ponctuelle adaptée au rythme des entreprises." },
  { keyword: "Engagement", text: "Une démarche éco-responsable et un soutien aux producteurs locaux." }
];

// Fix: Added missing ESSENTIALS for Essentials
export const ESSENTIALS = [
  { label: "Origine", value: "Drôme & Ardèche" },
  { label: "Cuisine", value: "Soignée & Locale" },
  { label: "Logistique", value: "Livraison Pro" }
];
