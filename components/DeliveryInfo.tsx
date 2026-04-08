import React from 'react';
import { Clock, MapPin, AlertCircle, CreditCard } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { DELIVERY_ZONE, ORDER_DEADLINE, MIN_ORDER } from '../constants';

export const DeliveryInfo: React.FC = () => {
  return (
    <SectionWrapper id="livraison" bg="white">
      <div className="bg-stone-900 text-stone-300 rounded-sm overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2">
          
          <div className="p-8 md:p-12 space-y-8">
            <h2 className="font-serif text-3xl text-white font-bold mb-6">Logistique & Livraison</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="text-primary-100 shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Créneaux de livraison</h4>
                  <p className="text-sm mt-1">Du Lundi au Vendredi, entre 11h30 et 13h30.</p>
                  <p className="text-sm text-stone-400 mt-1">Commande avant <span className="text-white font-medium">{ORDER_DEADLINE}</span>.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary-100 shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Zone d'intervention</h4>
                  <p className="text-sm mt-1">{DELIVERY_ZONE}</p>
                  <p className="text-sm text-stone-400 mt-1">Minimum de commande : {MIN_ORDER}.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-stone-700">
            <div className="bg-stone-900/50 p-6 rounded border border-stone-600 mb-6">
               <div className="flex items-start gap-3 mb-2">
                 <CreditCard className="text-primary-100 mt-1" size={20} />
                 <h4 className="text-white font-bold">Paiement Entreprise</h4>
               </div>
               <p className="text-sm text-stone-400 pl-8">
                 Nous acceptons les virements bancaires, cartes corporate (Amex incluse) et proposons la facturation fin de mois pour nos clients en compte.
               </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-stone-400">
              <AlertCircle size={16} />
              <span>Besoin d'une livraison hors zone ? Contactez-nous.</span>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};