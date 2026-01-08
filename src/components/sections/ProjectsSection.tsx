import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { projects } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';

export const ProjectsSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};