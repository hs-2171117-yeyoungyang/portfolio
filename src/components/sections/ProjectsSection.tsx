import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTooltipAnimation } from '../../hooks/useTooltipAnimation';
import { ANIMATION_CONFIG } from '../../constants/tooltip';
import { projects } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  const { isDark } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
  const { show: showTooltip, hideTooltip } = useTooltipAnimation({ 
    enabled: gridVisible && projects.length > 0 && !!projects[0].github
  });

  return (
    <section id="projects" className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Projects
        </h2>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * ANIMATION_CONFIG.staggerDelay}ms` }}
            >
              <ProjectCard 
                project={project}
                onProjectClick={onProjectClick}
                showTooltip={index === 0 && showTooltip}
                onTooltipDismiss={index === 0 ? hideTooltip : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};