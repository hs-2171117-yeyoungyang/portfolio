import React from 'react';
import { ANIMATION_CONFIG } from '../../constants/introAnimation';

interface Particle {
  id: number;
  angle: number;
  speed: number;
  color: string;
}

interface ParticleEffectProps {
  particles: Particle[];
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({ particles }) => {
  const { particleAnimationDuration } = ANIMATION_CONFIG;

  return (
    <>
      {particles.map((particle) => {
        const translateX = Math.cos((particle.angle * Math.PI) / 180) * particle.speed * 200;
        const translateY = Math.sin((particle.angle * Math.PI) / 180) * particle.speed * 200;
        
        return (
          <div
            key={particle.id}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
            style={{
              backgroundColor: particle.color,
              animation: `particle-${particle.id} ${particleAnimationDuration}ms ease-out forwards`,
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes particle-${particle.id} {
                0% {
                  transform: translate(-50%, -50%) scale(1);
                  opacity: 1;
                }
                100% {
                  transform: translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(0);
                  opacity: 0;
                }
              }
            `}} />
          </div>
        );
      })}
    </>
  );
};