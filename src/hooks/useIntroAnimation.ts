import { useState, useEffect } from 'react';
import { ANIMATION_CONFIG } from '../constants/introAnimation';

interface Particle {
  id: number;
  angle: number;
  speed: number;
  color: string;
}

interface UseHeroAnimationReturn {
  colorIntensity: number;
  exploded: boolean;
  particles: Particle[];
  showContent: boolean;
  showLinearBackground: boolean;
}

export const useHeroAnimation = (isDark: boolean): UseHeroAnimationReturn => {
  const [colorIntensity, setColorIntensity] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [showLinearBackground, setShowLinearBackground] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    const { duration, particleCount, explosionDelay } = ANIMATION_CONFIG;
    
    const easeInOutCubic = (progress: number): number => {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    };
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        const eased = easeInOutCubic(progress);
        setColorIntensity(eased);
        requestAnimationFrame(animate);
      } else {
        setColorIntensity(1);
        
        setTimeout(() => {
          setExploded(true);
          setShowContent(true);

          setTimeout(() => {
            setShowLinearBackground(true);
          }, ANIMATION_CONFIG.backgroundFadeInDelay);
          
          const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            angle: (i * 360) / particleCount,
            speed: 2 + Math.random() * 3,
            color: isDark 
              ? ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'][Math.floor(Math.random() * 4)]
              : ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'][Math.floor(Math.random() * 4)]
          }));
          
          setParticles(newParticles);
        }, explosionDelay);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isDark]);

  return { colorIntensity, exploded, particles, showContent, showLinearBackground };
};