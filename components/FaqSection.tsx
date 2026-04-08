import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionWrapper id="faq" bg="white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center text-stone-900 mb-12">Questions fréquentes</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-stone-200 rounded-sm bg-white overflow-hidden">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-medium text-stone-900">{faq.question}</span>
                {openIndex === idx ? <Minus size={20} className="text-primary-900" /> : <Plus size={20} className="text-stone-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="p-5 pt-0 text-stone-600 leading-relaxed bg-stone-50/50 border-t border-stone-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};