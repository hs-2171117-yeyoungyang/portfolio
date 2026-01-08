import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skills } from '../../data/skills';

export const SkillsSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-4 py-2 text-sm`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};