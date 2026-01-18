export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  awards?: string[];
  role: string;
  image?: string;
  github?: string;
  teamSize?: number;
}
  
export interface Skill {
  name: string;
  icon: string;   // svg 경로
  color: string;  // 아이콘 색상
}

export interface SkillCategory {
  [category: string]: Skill[];
}  

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact';