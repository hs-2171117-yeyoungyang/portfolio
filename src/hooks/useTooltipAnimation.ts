import { useState, useEffect } from 'react';

interface UseTooltipAnimationProps {
  enabled: boolean;
  showDelay?: number;
  hideDelay?: number;
}

export const useTooltipAnimation = ({ 
  enabled, 
  showDelay = 1000, 
  hideDelay = 4000 
}: UseTooltipAnimationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // 컴포넌트 마운트 후 showDelay 뒤에 툴팁 표시
    const showTimer = setTimeout(() => {
      setShow(true);
    }, showDelay);

    // hideDelay 동안 표시 후 사라짐
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, hideDelay);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [enabled, showDelay, hideDelay]);

  return show;
};