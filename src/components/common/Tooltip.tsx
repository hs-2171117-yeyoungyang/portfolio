import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface TooltipProps {
  message: string;
  show: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ message, show }) => {
  const { isDark } = useTheme();
  
  return (
    <div
      className={`absolute -top-14 right-0 z-50 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-300'} text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap relative`}>
        <span className="text-sm font-medium">{message}</span>
        {/* 말풍선 꼬리 */}
        <div className={`absolute -bottom-2 right-4 w-0 h-0
        border-l-[8px] border-l-transparent
        border-r-[8px] border-r-transparent
        border-t-[8px] ${isDark ? 'border-t-gray-800' : 'border-t-gray-300'}`}></div>
      </div>
    </div>
  );
};