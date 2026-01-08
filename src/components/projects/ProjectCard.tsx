import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from '../../types';
import { TechBadge } from './TechBadge';
import { AwardBadge } from './AwardBadge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl overflow-hidden border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
    >
      <div className={`h-48 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center`}>
        <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>프로젝트 이미지</p>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.period}
          </span>
        </div>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          {project.description}
        </p>
        {project.awards && (
          <div className="mb-4">
            {project.awards.map((award, i) => (
              <AwardBadge key={i} award={award} />
            ))}
          </div>
        )}
        <div className="mb-4">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} mb-2`}>
            주요 역할
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <TechBadge key={i} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};