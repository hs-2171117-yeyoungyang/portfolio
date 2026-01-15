import React from 'react';
import { GRADIENT_CONFIG } from '../../constants/introAnimation';

interface GradientBackgroundProps {
  isDark: boolean;
  colorIntensity: number;
  exploded: boolean;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  isDark,
  colorIntensity,
  exploded,
}) => {
  const config = isDark ? GRADIENT_CONFIG.dark : GRADIENT_CONFIG.light;
  
  const gradientSteps = config.steps.map((step, index) => {
    const opacity = step.opacity * colorIntensity;
    const color = config.colors[index];
    return color === 'transparent' 
      ? `transparent ${step.stop}%`
      : `${color} ${opacity}) ${step.stop}%`;
  }).join(', ');

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div 
        className={`w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] rounded-full transition-opacity duration-1000 ${
          exploded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: `radial-gradient(circle at center, ${gradientSteps})`,
          filter: `blur(${GRADIENT_CONFIG.blur}px)`,
        }}
      />
    </div>
  );
};