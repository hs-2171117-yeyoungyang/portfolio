import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 text-center ${
        isDark ? 'bg-gray-800/50 text-gray-400' : 'bg-gray-100 text-gray-600'
      }`}
    >
      <p>© 2025 Frontend Developer Portfolio. All rights reserved.</p>
    </footer>
  );
};