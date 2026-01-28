interface ImageLoadingSkeletonProps {
    isDark: boolean;
  }
  
  export const ImageLoadingSkeleton = ({ isDark }: ImageLoadingSkeletonProps) => {
  return (
    <div className="absolute inset-0 animate-pulse">
      <div
        className={`w-full h-full ${
          isDark ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isDark
              ? 'from-transparent via-white/10 to-transparent'
              : 'from-transparent via-black/10 to-transparent'
          }`}
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.8s infinite',
          }}
        />
      </div>
    </div>
  );
};