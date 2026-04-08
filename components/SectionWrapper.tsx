import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'stone' | 'dark';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  className = '', 
  children, 
  bg = 'white' 
}) => {
  const backgrounds = {
    white: "bg-white",
    stone: "bg-stone-50",
    dark: "bg-stone-900 text-white"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};