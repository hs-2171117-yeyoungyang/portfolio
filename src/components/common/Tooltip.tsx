import React from 'react';
import { TOOLTIP_POSITION_CONFIG } from '../../constants/tooltip';
import '../../styles/Tooltip.css'

interface TooltipProps {
  content: string;
  show: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  animate?: boolean;
}

export const Tooltip = ({ content, show, position = 'top', animate = false }: TooltipProps) => {
  if (!show) return null;

  const positionConfig = TOOLTIP_POSITION_CONFIG[position];
  const animationClass = animate ? `animate-tooltip-float position-${position}` : '';

  return (
    <div
      className={`absolute ${positionConfig.container} z-50 ${animationClass}`}
    >
      <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
        {content}
      </div>
      <div 
        className={`absolute w-0 h-0 border-4 ${positionConfig.arrow}`}
      />
    </div>
  );
};