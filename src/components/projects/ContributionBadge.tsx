import React from 'react';
import { useAnimatedPercentage } from '../../hooks/usePercentageAnimation';

interface ContributionBadgeProps {
  label: string;
  percentage: number;
  delay?: number;
  isDark?: boolean;
}

export const ContributionBadge: React.FC<ContributionBadgeProps> = ({
  label,
  percentage,
  delay = 0,
  isDark = false,
}) => {
  const { displayPercentage, isAnimating } = useAnimatedPercentage({
    percentage,
    delay,
  });

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/50'
          : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400/50'
      } ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
    >
      <span className={`text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
        {label}
      </span>
      <span
        className={`text-lg font-bold ${
          isDark ? 'text-purple-300' : 'text-purple-600'
        } min-w-[3ch] text-right`}
      >
        {displayPercentage}%
      </span>
    </div>
  );
};
