import { useState } from 'react';
import { SkillIcon } from './SkillIcon';
import { Tooltip } from '../common/Tooltip';

interface SkillItemProps {
  skill: { 
    name: string; 
    icon: string; 
    color: string; 
    category: string 
  };
  isBlurred: boolean;
  isDark: boolean;
  index: number;
  isVisible: boolean;
}

export const SkillItem: React.FC<SkillItemProps> = ({ 
  skill, 
  isBlurred, 
  isDark,
  index,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative flex items-center justify-center transition-all duration-500 ${
        isBlurred ? 'opacity-30 blur-sm scale-95' : 'blur-0 scale-100'
      } hover:z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${
          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
        } rounded-xl p-3 sm:p-4 transition-all duration-200 cursor-pointer ${
          !isBlurred ? 'transform hover:scale-110' : ''
        }`}
      >
        <SkillIcon name={skill.icon} color={skill.color} />
      </div>
      
      <Tooltip 
        content={skill.name}
        show={isHovered}
        position="bottom"
      />
    </div>
  );
};