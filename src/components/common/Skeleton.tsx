interface SkeletonProps {
    className?: string;
    isDark?: boolean;
  }
  
  export const Skeleton = ({ className = '', isDark = false }: SkeletonProps) => {
    return (
      <div 
        className={`animate-pulse ${isDark ? 'bg-gray-700' : 'bg-gray-300'} rounded ${className}`}
        style={{
          backgroundImage: isDark 
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }}
      />
    );
  };
  
  // 미리 정의된 스켈레톤 타입들
  export const SkeletonText = ({ isDark = false, lines = 1, className = '' }: { isDark?: boolean; lines?: number; className?: string }) => {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            isDark={isDark} 
            className={`h-4 ${i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}`} 
          />
        ))}
      </div>
    );
  };
  
  export const SkeletonTitle = ({ isDark = false, className = '' }: { isDark?: boolean; className?: string }) => {
    return <Skeleton isDark={isDark} className={`h-8 w-2/3 ${className}`} />;
  };
  
  export const SkeletonCircle = ({ isDark = false, size = 'md', className = '' }: { isDark?: boolean; size?: 'sm' | 'md' | 'lg'; className?: string }) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };
    
    return <Skeleton isDark={isDark} className={`${sizeClasses[size]} rounded-full ${className}`} />;
  };
  
  export const SkeletonBadge = ({ isDark = false, className = '' }: { isDark?: boolean; className?: string }) => {
    return <Skeleton isDark={isDark} className={`h-6 w-16 rounded-full ${className}`} />;
  };