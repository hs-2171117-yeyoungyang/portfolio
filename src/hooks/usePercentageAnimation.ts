import { useEffect, useState } from 'react';

interface UseAnimatedPercentageOptions {
  percentage: number;
  delay?: number;
  duration?: number;
}

export const useAnimatedPercentage = ({
  percentage,
  delay = 0,
  duration = 900,
}: UseAnimatedPercentageOptions) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);

      const frame = 30;
      const totalFrames = duration / frame;
      const increment = percentage / totalFrames;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setDisplayPercentage(percentage);
          clearInterval(interval);
        } else {
          setDisplayPercentage(Math.floor(current));
        }
      }, frame);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [percentage, delay, duration]);

  return { displayPercentage, isAnimating };
};
