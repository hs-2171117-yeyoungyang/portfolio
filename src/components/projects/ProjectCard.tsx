import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from '../../types';
import { TechBadge } from './TechBadge';
import { AwardBadge } from './AwardBadge';
import { Tooltip } from '../common/Tooltip';
import GithubIcon from '../../assets/icons/github.svg';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;

  showGithubHint?: boolean;
  dismissGithubHint?: () => void;

  showRoleHint?: boolean;
  dismissRoleHint?: () => void;
}

export const ProjectCard = ({
  project,
  onProjectClick,
  showGithubHint = false,
  dismissGithubHint,
  showRoleHint = false,
  dismissRoleHint,
}: ProjectCardProps) => {
  const { isDark } = useTheme();

  const handleGithubHover = () => {
    dismissGithubHint?.();
  };

  const handleRoleHover = () => {
    dismissRoleHint?.();
  };

  const rolesText = project.role.join(', ');

  return (
    <div
      onClick={() => onProjectClick(project)}
      className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl overflow-hidden border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
    >
      <div
        className={`relative h-70 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        } flex items-center justify-center`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} 이미지`}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            프로젝트 이미지
          </p>
        )}

        {project.github && (
          <div className="absolute top-3 right-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleGithubHover}
              onClick={(e) => e.stopPropagation()}
              className="relative block bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <img src={GithubIcon} alt="GitHub" className="w-5 h-5" />

              <Tooltip
                content="더 자세히 알아보기"
                show={showGithubHint}
                position="left"
                animate
              />
            </a>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.year}
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
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm text-gray-500">주요 역할</p>

            <div className="relative" onMouseEnter={handleRoleHover}>
              <Tooltip
                content="전체 내용 보기"
                show={showRoleHint}
                position="right"
                animate
              />
            </div>
          </div>

          <p
            className={`text-sm ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } line-clamp-1`}
          >
            {rolesText}
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