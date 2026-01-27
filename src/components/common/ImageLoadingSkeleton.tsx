interface ImageLoadingSkeletonProps {
    isDark: boolean;
  }
  
  export const ImageLoadingSkeleton = ({ isDark }: ImageLoadingSkeletonProps) => {
    return (
      <div className="absolute inset-0 animate-pulse">
        <div className={`w-full h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
          {/* 펄스 애니메이션 오버레이 */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite'
            }} 
          />
          
          {/* 로딩 스피너 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-gray-400/30 rounded-full"></div>
              <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin absolute top-0"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };