// components/common/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  isDark = false,
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-300';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
    lg: 'px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg'
  };

  const variantStyles = {
    primary: isDark 
      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
      : 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: isDark 
      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
      : 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: isDark 
      ? 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white' 
      : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};