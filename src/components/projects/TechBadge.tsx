import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  const { isDark } = useTheme();

  return (
    <span
      className={`${
        isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'
      } text-xs px-3 py-1 rounded-full`}
    >
      {tech}
    </span>
  );
};