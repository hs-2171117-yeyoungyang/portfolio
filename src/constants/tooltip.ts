export const TOOLTIP_ANIMATION_CONFIG = {
    showDelay: 1500,
    floatDuration: 2000,
    floatDistance: 8,
    floatEasing: 'ease-in-out',
  } as const;
  
  export const TOOLTIP_STYLE_CONFIG = {
    background: 'rgb(17, 24, 39)', // gray-900
    textColor: 'rgb(255, 255, 255)',
    fontSize: 'xs',
    padding: {
      x: 12,
      y: 8,
    },
    borderRadius: 8,
    shadow: 'lg',
    zIndex: 50,
  } as const;
  
  export const TOOLTIP_POSITION_CONFIG = {
    top: {
      container: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      arrow: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900',
    },
    bottom: {
      container: 'top-full left-1/2 -translate-x-1/2 mt-2',
      arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900',
    },
    left: {
      container: 'right-full top-1/2 -translate-y-1/2 mr-2',
      arrow: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900',
    },
    right: {
      container: 'left-full top-1/2 -translate-y-1/2 ml-2',
      arrow: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900',
    },
  } as const;
  
  export const TOOLTIP_ARROW_CONFIG = {
    size: 4,
  } as const;
  
  // 애니메이션 stagger delay
  export const ANIMATION_CONFIG = {
    staggerDelay: 200, // ms
  } as const;