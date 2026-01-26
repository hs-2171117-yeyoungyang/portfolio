import { useTheme } from '../../contexts/ThemeContext';
import type { AboutItem } from '../../data/abouts';

interface AboutCardProps {
  item: AboutItem;
  index: number;
  isVisible: boolean;
}

export const AboutCard: React.FC<AboutCardProps> = ({ item, index, isVisible }) => {
  const { isDark } = useTheme();

  return (
    <div 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
        {item.title}
      </h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
        {item.description}
      </p>
    </div>
  );
};