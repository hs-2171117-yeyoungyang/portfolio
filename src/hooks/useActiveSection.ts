import { useState, useEffect } from 'react';
import type { SectionId } from '../types';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection('contact');
        return;
      }

      const sections: SectionId[] = [
        'hero',
        'about',
        'skills',
        'projects',
        'contact'
      ];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
