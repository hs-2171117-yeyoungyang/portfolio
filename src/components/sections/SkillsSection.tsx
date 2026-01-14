import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/skills';
import { SkillIcon } from './SKillIcon';

// 카테고리 토글 버튼 컴포넌트
const CategoryToggle = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  isDark,
  isVisible
}: {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  isDark: boolean;
  isVisible: boolean;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-500 ${
          selectedCategory === null
            ? 'bg-blue-500 text-white shadow-lg transform scale-105'
            : isDark
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-500 ${
            selectedCategory === category
              ? 'bg-blue-500 text-white shadow-lg transform scale-105'
              : isDark
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: `${(index + 1) * 100}ms` }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// 개별 스킬 아이템 컴포넌트
const SkillItem = ({ 
  skill, 
  isBlurred, 
  isDark,
  index,
  isVisible
}: {
  skill: { name: string; icon: string; color: string; category: string };
  isBlurred: boolean;
  isDark: boolean;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group relative flex items-center justify-center transition-all duration-500 ${
        isBlurred ? 'opacity-30 blur-sm scale-95' : 'blur-0 scale-100'
      } hover:z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        className={`${
          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
        } rounded-xl p-3 sm:p-4 transition-all duration-200 cursor-pointer ${
          !isBlurred ? 'transform hover:scale-110' : ''
        }`}
      >
        <SkillIcon name={skill.icon} color={skill.color} />
      </div>
      
      {/* Hover 시 표시되는 스킬 이름 */}
      <div
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          ${isDark ? 'bg-gray-900' : 'bg-gray-800'} text-white 
          px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap pointer-events-none z-10`}
      >
        {skill.name}
        <div 
          className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 ${isDark ? 'bg-gray-900' : 'bg-gray-800'} rotate-45`}
        ></div>
      </div>
    </div>
  );
};

// 메인 스킬 섹션 컴포넌트
export const SkillsSection = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: categoryRef, isVisible: categoryVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  // 카테고리별로 스킬을 분류하여 저장
  const skillsByCategory = Object.entries(skills).map(([category, items]) => ({
    category,
    items,
  }));

  // 모든 스킬을 카테고리 정보와 함께 하나의 배열로 합침
  const allSkills = skillsByCategory.flatMap(({ category, items }) =>
    items.map((skill) => ({ ...skill, category }))
  );

  const categories = Object.keys(skills);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Skills
        </h2>

        <div ref={categoryRef}>
          <CategoryToggle
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            isDark={isDark}
            isVisible={categoryVisible}
          />
        </div>

        <div
          className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-4 sm:p-6 md:p-8 border ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {allSkills.map((skill, index) => {
              const isBlurred = selectedCategory !== null && skill.category !== selectedCategory;
              
              return (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  isBlurred={isBlurred}
                  isDark={isDark}
                  index={index}
                  isVisible={skillsVisible}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};