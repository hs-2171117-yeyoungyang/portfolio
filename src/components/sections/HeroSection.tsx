import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { scrollToSection } from '../../utils/scroll';

export const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            안녕하세요
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          프론트엔드 개발자
          <br />
          <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>포트폴리오</span>
        </h1>
        <p className={`text-lg md:text-xl mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          사용자 경험을 최우선으로 생각하며,<br />
          끊임없이 성장하는 개발자입니다.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className={`px-8 py-4 rounded-full font-medium transition-all ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          프로젝트 보기
        </button>
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto opacity-50" />
        </div>
      </div>
    </section>
  );
};