export const ANIMATION_CONFIG = {
    duration: 2500,
    particleCount: 50,
    explosionDelay: 200,
    particleAnimationDuration: 2000,
  };
  
  export const GRADIENT_CONFIG = {
    light: {
      steps: [
        { stop: 0, opacity: 0.7 },
        { stop: 20, opacity: 0.55 },
        { stop: 40, opacity: 0.35 },
        { stop: 60, opacity: 0.18 },
        { stop: 80, opacity: 0.08 },
        { stop: 100, opacity: 0 },
      ],
      colors: ['rgba(147, 197, 253,', 'rgba(96, 165, 250,', 'rgba(59, 130, 246,', 'rgba(37, 99, 235,', 'rgba(29, 78, 216,', 'transparent'],
    },
    dark: {
      steps: [
        { stop: 0, opacity: 0.6 },
        { stop: 20, opacity: 0.45 },
        { stop: 40, opacity: 0.3 },
        { stop: 60, opacity: 0.15 },
        { stop: 80, opacity: 0.05 },
        { stop: 100, opacity: 0 },
      ],
      colors: ['rgba(59, 130, 246,', 'rgba(37, 99, 235,', 'rgba(30, 64, 175,', 'rgba(30, 58, 138,', 'rgba(23, 37, 84,', 'transparent'],
    },
    blur: 40,
    sizes: {
      mobile: { width: 500, height: 500 },
      tablet: { width: 700, height: 700 },
      desktop: { width: 900, height: 900 },
    },
  };