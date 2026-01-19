import { useState, useEffect, useCallback } from 'react';
import { ANIMATION_CONFIG } from '../constants/memojiSlider';

interface UseMemojiSliderProps {
  totalItems: number;
  autoSlide?: boolean;
  interval?: number;
  pauseAfterManualSelect?: number;
}

export const useMemojiSlider = ({
  totalItems,
  autoSlide = true,
  interval = ANIMATION_CONFIG.autoSlideInterval,
  pauseAfterManualSelect = ANIMATION_CONFIG.pauseAfterManualSelect
}: UseMemojiSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoSlide);

  // 다음 슬라이드로 이동
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // 이전 슬라이드로 이동
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // 특정 인덱스로 이동
  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
      // 수동 선택 시 자동 재생 일시 정지
      setIsAutoPlaying(false);
      
      // 설정된 시간 후 자동 재생 재개
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, pauseAfterManualSelect);
    }
  }, [totalItems, pauseAfterManualSelect]);

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalId = setInterval(goToNext, interval);
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, interval, goToNext]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToIndex,
    isAutoPlaying,
    setIsAutoPlaying
  };
};