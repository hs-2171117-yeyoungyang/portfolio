import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const aboutContent = [
  {
    title: '사용자 중심의 개발',
    description: '디지털 소외계층을 고려한 접근성 높은 UI/UX 설계부터 실시간 통신을 활용한 인터랙티브한 애플리케이션까지, 사용자의 니즈를 최우선으로 생각하며 개발합니다.'
  },
  {
    title: '지속적인 성장',
    description: 'React Native, Flutter, Swift 등 다양한 프레임워크를 경험하며 각 기술의 장단점을 이해하고 프로젝트에 적합한 기술을 선택하는 능력을 키워왔습니다.'
  },
  {
    title: '문제 해결 능력',
    description: '오픈소스 코드를 분석하고 개선하며, 복잡한 요구사항을 단계적으로 해결하는 과정에서 견고한 문제 해결 능력을 키웠습니다.'
  }
];

export const AboutSection = () => {
  const { isDark } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div 
            ref={imageRef}
            className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-2xl p-6 sm:p-8 md:p-12 flex items-center justify-center transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4"></div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm`}>프로필 이미지</p>
            </div>
          </div>
          <div 
            ref={contentRef}
            className="space-y-4 sm:space-y-6"
          >
            {aboutContent.map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{item.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};