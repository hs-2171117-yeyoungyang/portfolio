export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  awards?: string[];
  role: string;
  image: string;
  }
  
export interface SkillCategory {
  [category: string]: string[];
}

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact';