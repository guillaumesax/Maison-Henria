import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { MousePointerClick, ChefHat, Truck, Smile } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    { icon: MousePointerClick, title: "Vous choisissez", desc: "Sélectionnez vos menus et préférences en ligne ou par email." },
    { icon: ChefHat, title: "On cuisine", desc: "Nos chefs préparent tout le matin même avec des produits frais." },
    { icon: Truck, title: "On livre", desc: "Livraison sur créneau le midi, directement à votre accueil ou étage." },
    { icon: Smile, title: "Vous dégustez", desc: "Tout est prêt à servir. Profitez de votre déjeuner." }
  ];

  return (
    <SectionWrapper id="concept" bg="stone">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl font-bold text-stone-900">Simple comme bonjour</h2>
        <p className="text-stone-600 mt-2">Un processus optimisé pour les Office Managers.</p>
      </div>

      <div className="relative">
        {/* Line for desktop */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-stone-200 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-stone-50 md:bg-transparent p-4 md:p-0 rounded-lg">
              <div className="w-24 h-24 bg-white border-2 border-stone-200 rounded-full flex items-center justify-center mb-6 shadow-sm z-10 text-primary-900">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-900">{step.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};