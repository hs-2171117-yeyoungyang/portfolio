import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/skills';
import { CategoryToggle } from '../skills/CategoryToggle';
import { SkillItem } from '../skills/SkillItem';

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