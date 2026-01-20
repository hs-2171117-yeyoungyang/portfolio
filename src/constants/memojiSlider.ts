import type { MemojiAnimationConfig, MemojiStyleConfig } from '../types';

export const ANIMATION_CONFIG: MemojiAnimationConfig = {
  autoSlideInterval: 2500,
  transitionDuration: 1000,
  animationDelay: 200,
  pauseOnHover: true,
  pauseAfterManualSelect: 3000,
} as const;

export const STYLE_CONFIG: MemojiStyleConfig = {
  background: {
    gradient: {
      from: 'rgb(59, 130, 246)',
      to: 'rgb(147, 51, 234)',
      opacity: 0.2,
      blur: 40,
    },
    animation: 'pulse',
  },
  transition: {
    opacity: {
      enter: 1,
      exit: 0,
    },
    scale: {
      enter: 1,
      exit: 0.75,
    },
    rotate: {
      enter: 0,
      exit: 12,
    },
  },
} as const;

export const INDICATOR_CONFIG = {
  size: {
    default: 8,
    active: 24,
  },
  gap: 8,
  colors: {
    active: 'rgb(59, 130, 246)',
    inactive: {
      light: 'rgb(209, 213, 219)',
      dark: 'rgb(75, 85, 99)',
    },
    hover: {
      light: 'rgb(156, 163, 175)',
      dark: 'rgb(107, 114, 128)',
    },
  },
  animation: {
    duration: 300,
    hoverScale: 1.25,
  },
} as const;

export const SIZE_CONFIG = {
  mobile: {
    width: 128,
    height: 128,
  },
  tablet: {
    width: 160,
    height: 160,
  },
  desktop: {
    width: 192,
    height: 192,
  },
} as const;