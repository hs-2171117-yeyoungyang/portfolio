import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { scrollToSection } from '../../utils/scroll';

export const HeroSection = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className={`mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            안녕하세요
          </span>
        </div>
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          프론트엔드 개발자
          <br />
          <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>포트폴리오</span>
        </h1>
        <p 
          className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          사용자 경험을 최우선으로 생각하며,<br />
          끊임없이 성장하는 개발자입니다.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-700 delay-500 ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          } text-white ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          프로젝트 보기
        </button>
        <div 
          className={`mt-12 sm:mt-16 animate-bounce transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8 mx-auto opacity-50" />
        </div>
      </div>
    </section>
  );
};