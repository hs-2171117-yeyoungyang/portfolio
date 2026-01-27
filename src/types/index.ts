// Project
export interface Project {
  title: string;
  period: string;
  year: String,
  description: string;
  tech: string[];
  awards?: string[];
  role: string[];
  image?: string;
  github?: string;
  teamSize?: number;
  achievements?: string[];
  learnings?: string[];
  contributions?: Contribution[];
}

export interface Contribution {
  label: string;
  percentage: number;
}

// Skill
export interface Skill {
  name: string;
  icon: string;   // svg 경로
  color: string;  // 아이콘 색상
}

export interface SkillCategory {
  [category: string]: Skill[];
}  

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

// Memoji
export interface MemojiItem {
  image: string;
  alt: string;
  description: string;
}

export interface MemojiAnimationConfig {
  autoSlideInterval: number;
  transitionDuration: number;
  animationDelay: number;
  pauseOnHover: boolean;
  pauseAfterManualSelect: number;
}

export interface MemojiStyleConfig {
  background: {
    gradient: {
      from: string;
      to: string;
      opacity: number;
      blur: number;
    };
    animation: 'pulse' | 'spin' | 'bounce' | 'none';
  };
  transition: {
    opacity: {
      enter: number;
      exit: number;
    };
    scale: {
      enter: number;
      exit: number;
    };
    rotate: {
      enter: number;
      exit: number;
    };
  };
}