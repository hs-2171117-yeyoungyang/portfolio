import { useState, useEffect } from 'react';
import { TOOLTIP_ANIMATION_CONFIG } from '../constants/tooltip';

interface UseTooltipAnimationProps {
  enabled: boolean;
  showDelay?: number;
}

export const useTooltipAnimation = ({ 
  enabled, 
  showDelay = TOOLTIP_ANIMATION_CONFIG.showDelay
}: UseTooltipAnimationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setShow(false);
      return;
    }

    // 컴포넌트 마운트 후 showDelay 뒤에 툴팁 표시
    const showTimer = setTimeout(() => {
      setShow(true);
    }, showDelay);

    return () => {
      clearTimeout(showTimer);
    };
  }, [enabled, showDelay]);

  // 툴팁 숨기기 함수
  const hideTooltip = () => {
    setShow(false);
  };

  return { show, hideTooltip };
};