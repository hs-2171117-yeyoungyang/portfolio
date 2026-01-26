import { LINEAR_GRADIENT_CONFIG, ANIMATION_CONFIG } from '../../constants/introAnimation';

interface LinearGradientBackgroundProps {
  isDark: boolean;
  show: boolean;
}

export const LinearGradientBackground: React.FC<LinearGradientBackgroundProps> = ({ 
  isDark, 
  show 
}) => {
  const config = isDark ? LINEAR_GRADIENT_CONFIG.dark : LINEAR_GRADIENT_CONFIG.light;
  const { backgroundFadeInDuration } = ANIMATION_CONFIG;
  
  return (
    <div 
      className={`absolute inset-0 transition-opacity pointer-events-none ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transitionDuration: `${backgroundFadeInDuration}ms`,
        background: `linear-gradient(135deg, ${config.from} 0%, ${config.via1} 25%, ${config.via2} 50%, ${config.via1} 75%, ${config.to} 100%)`,
      }}
    />
  );
};