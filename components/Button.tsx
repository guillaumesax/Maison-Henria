import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-900 shadow-md hover:shadow-lg",
    secondary: "bg-stone-200 text-stone-900 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border-2 border-primary-900 text-primary-900 hover:bg-primary-50 focus:ring-primary-900"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-sm",
    md: "text-sm px-6 py-3 rounded-sm",
    lg: "text-base px-8 py-4 rounded-md"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};