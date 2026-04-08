import React from 'react';
import { Leaf, ChefHat, Truck, FileText } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    { icon: Leaf, text: "Produits de saison" },
    { icon: ChefHat, text: "Fait maison" },
    { icon: Truck, text: "Livraison entreprise" },
    { icon: FileText, text: "Facturation simple" },
  ];

  return (
    <div className="border-y border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-center py-8 gap-3 text-center md:text-left hover:bg-stone-50 transition-colors group">
              <item.icon className="w-6 h-6 text-primary-900 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <span className="font-medium text-stone-800">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center pb-4 text-xs font-semibold tracking-widest text-primary-900 uppercase">
          Service du midi — idéal équipes & réunions
        </div>
      </div>
    </div>
  );
};