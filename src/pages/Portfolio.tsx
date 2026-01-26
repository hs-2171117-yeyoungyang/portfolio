import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/IntroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ProjectModal } from '../components/projects/ProjectModal';
import type { Project } from '../types';

const Portfolio = () => {
  const { isDark } = useTheme();
  const activeSection = useActiveSection();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onProjectClick={handleProjectClick} />
      <ContactSection />
      <Footer />
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Portfolio;