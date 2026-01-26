import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from '../../types';
import { TechBadge } from './TechBadge';
import { AwardBadge } from './AwardBadge';
import { ContributionBadge } from './ContributionBadge';
import GithubIcon from '../../assets/icons/github.svg';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { isDark } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-[60] w-10 h-10 rounded-full
          ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
          flex items-center justify-center`}
        aria-label="닫기"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6
          ${isDark ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80'}
          rounded-2xl shadow-2xl scrollbar-hide`}
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className={`${isDark ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-80'} rounded-3xl mb-6 shadow-lg overflow-hidden`}>
          {/* 이미지 영역 */}
          {project?.image && (
            <div className="w-full aspect-video">
              <img
                src={project.image}
                alt={`${project.title} 이미지`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* 콘텐츠 영역 */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.period}
                </span>
                {project.teamSize && (
                  <>
                    <span className="text-gray-400">|</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.teamSize === 1
                        ? '개인 프로젝트'
                        : `${project.teamSize}인 팀 프로젝트`}
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {project.description}
            </p>

            {/* 기여도 섹션 */}
            {project?.contributions && project.contributions.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-3">
                  {project.contributions.map((contribution, i) => (
                    <ContributionBadge 
                      key={i} 
                      label={contribution.label} 
                      percentage={contribution.percentage}
                      delay={i * 100}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}

            {project?.awards && project.awards.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.awards.map((award, i) => (
                  <AwardBadge key={i} award={award} />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project?.tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className={`${isDark ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-80'} rounded-3xl p-6 sm:p-8 shadow-lg`}>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">주요 역할</h3>
            <ul className="space-y-2">
              {project.role.map((item, i) => (
                <li
                  key={i}
                  className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed flex`}
                >
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project?.achievements && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">성과</h3>
              <ul className="space-y-2">
                {project.achievements.map((item, i) => (
                  <li key={i} className={`${isDark ? 'text-gray-300' : 'text-gray-700'} flex`}>
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project?.learnings && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">느낀 점</h3>
              <ul className="space-y-2">
                {project.learnings.map((item, i) => (
                  <li key={i} className={`${isDark ? 'text-gray-300' : 'text-gray-700'} flex`}>
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project?.github && (
            <div className="flex justify-end pt-4 border-t border-gray-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
              >
                <img src={GithubIcon} alt="GitHub" className="w-5 h-5 invert" />
                <span className="text-white text-sm font-medium pr-1">GitHub</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};