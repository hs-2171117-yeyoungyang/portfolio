import { useTheme } from '../../contexts/ThemeContext';

interface AwardBadgeProps {
  award: string;
}

export const AwardBadge = ({ award }: AwardBadgeProps) => {
  const { isDark } = useTheme();

  return (
    <span
      className={`inline-block ${
        isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'
      } text-xs px-3 py-1 rounded-full mr-2 mb-2`}
    >
      🏆 {award}
    </span>
  );
};