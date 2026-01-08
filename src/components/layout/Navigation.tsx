import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { NavLink } from '../common/NavLink';
import { ThemeToggle } from '../common/ThemeToggle';
import type { SectionId } from '../../types';

interface NavigationProps {
  activeSection: SectionId;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const { isDark } = useTheme();

  const navItems: { href: string; label: string; id: SectionId }[] = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">
          Portfolio
        </a>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              isActive={activeSection === item.id}
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};