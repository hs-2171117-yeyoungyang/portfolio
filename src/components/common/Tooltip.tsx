import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface TooltipProps {
  content: string;
  show: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  show, 
  position = 'top',
  className = ''
}) => {
  const { isDark } = useTheme();
  
  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2'
  };

  const arrowClasses = {
    top: `-bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45`,
    bottom: `-top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45`,
    left: `-right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45`,
    right: `-left-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45`
  };
  
  return (
    <div
      className={`absolute ${positionClasses[position]} z-10 transition-opacity duration-200 pointer-events-none ${
        show ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-800'} text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap relative`}>
        {content}
        <div 
          className={`absolute ${arrowClasses[position]} ${isDark ? 'bg-gray-900' : 'bg-gray-800'}`}
        />
      </div>
    </div>
  );
};