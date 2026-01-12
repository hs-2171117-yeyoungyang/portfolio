import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skills } from '../../data/skills';
import { SkillIcon } from './SKillIcon';

// 카테고리 토글 버튼 컴포넌트
const CategoryToggle = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  isDark 
}: {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  isDark: boolean;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          selectedCategory === null
            ? 'bg-blue-500 text-white shadow-lg transform scale-105'
            : isDark
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-blue-500 text-white shadow-lg transform scale-105'
              : isDark
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
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
  isDark 
}: {
  skill: { name: string; icon: string; color: string; category: string };
  isBlurred: boolean;
  isDark: boolean;
}) => {
  return (
    <div
      className={`group relative flex items-center justify-center transition-all duration-300 ${
        isBlurred ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'
      } hover:z-50`}
    >
      <div
        className={`${
          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
        } rounded-xl p-4 transition-all duration-200 cursor-pointer ${
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
          px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none z-10`}
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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <CategoryToggle
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isDark={isDark}
        />

        <div
          className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 border ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {allSkills.map((skill) => {
              const isBlurred = selectedCategory !== null && skill.category !== selectedCategory;
              
              return (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  isBlurred={isBlurred}
                  isDark={isDark}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};