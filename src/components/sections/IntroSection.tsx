import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { scrollToSection } from '../../utils/scroll';
import { useHeroAnimation } from '../../hooks/useIntroAnimation';
import { GradientBackground } from './GradientBackground';
import { ParticleEffect } from './ParticleEffect';
import { LinearGradientBackground } from './LinearGradientBackground';

export const HeroSection = () => {
  const { isDark } = useTheme();
  const { colorIntensity, exploded, particles, showContent, showLinearBackground } = useHeroAnimation(isDark);

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* 선형 그라디언트 배경 */}
      <LinearGradientBackground isDark={isDark} show={showLinearBackground} />

      {/* 원형 그라디언트 배경 */}
      <GradientBackground 
        isDark={isDark}
        colorIntensity={colorIntensity}
        exploded={exploded}
      />

      {/* 폭죽 파티클 효과 */}
      {exploded && <ParticleEffect particles={particles} />}

      {/* 메인 콘텐츠 */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          안녕하세요,
          <br />
          프론트엔드 개발자
          <br />
          <span className={isDark ? 'text-blue-400' : 'text-blue-500'}>양예영</span>입니다.
        </h1>
        <p 
          className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          사용자 경험을 최우선으로 생각하며,<br />
          끊임없이 성장하는 개발자입니다.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-1000 delay-400 ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          } text-white ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          프로젝트 보기
        </button>
        <div 
          className={`mt-12 sm:mt-16 animate-bounce transition-all duration-1000 delay-700 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown size={28} className={`sm:w-8 sm:h-8 mx-auto opacity-50 ${isDark ? 'text-white' : 'text-gray-900'}`} />
        </div>
      </div>
    </section>
  );
};