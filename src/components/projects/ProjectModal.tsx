import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from '../../types';
import { TechBadge } from './TechBadge';
import { AwardBadge } from './AwardBadge';
import GithubIcon from '../../assets/icons/github.svg';

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
      {/* 블러 배경 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* 모달 컨텐츠 */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className={`sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
          } flex items-center justify-center transition-colors duration-200`}
          aria-label="닫기"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 프로젝트 이미지 */}
        {project?.image && (
          <div className="w-full h-64 sm:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} 이미지`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 프로젝트 정보 */}
        <div className="p-6 sm:p-8">
          {/* 헤더 */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold">{project?.title}</h2>
              {project?.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <img src={GithubIcon} alt="GitHub" className="w-5 h-5 invert" />
                </a>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project?.period}
              </span>
              {project?.teamSize && (
                <>
                  <span className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    |
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.teamSize === 1 ? '개인 프로젝트' : `${project.teamSize}인 팀 프로젝트`}
                  </span>
                </>
              )}
            </div>

            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              {project?.description}
            </p>

            {/* 수상 내역 */}
            {project?.awards && project.awards.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.awards.map((award, i) => (
                  <AwardBadge key={i} award={award} />
                ))}
              </div>
            )}

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2">
              {project?.tech.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </div>

          {/* 구분선 */}
          <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} my-6`} />

          {/* 주요 역할 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">주요 역할</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              {project?.detailDescription || project?.role}
            </p>
          </div>

          {/* 성과 */}
          {project?.achievements && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">성과</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {project.achievements}
              </p>
            </div>
          )}

          {/* 느낀 점 */}
          {project?.learnings && (
            <div>
              <h3 className="text-xl font-bold mb-3">느낀 점</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {project.learnings}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};