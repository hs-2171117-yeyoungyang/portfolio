import { Skeleton, SkeletonText, SkeletonTitle, SkeletonBadge } from '../common/Skeleton';

interface ProjectCardSkeletonProps {
  isDark: boolean;
}

export const ProjectCardSkeleton = ({ isDark }: ProjectCardSkeletonProps) => {
  return (
    <div
      className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl overflow-hidden border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      {/* 이미지 영역 스켈레톤 */}
      <div className={`relative h-70 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <Skeleton isDark={isDark} className="w-full h-full" />
      </div>

      {/* 콘텐츠 영역 스켈레톤 */}
      <div className="p-6">
        {/* 타이틀 & 연도 */}
        <div className="flex justify-between items-start mb-3">
          <SkeletonTitle isDark={isDark} />
          <Skeleton isDark={isDark} className="h-5 w-16" />
        </div>

        {/* 설명 */}
        <SkeletonText isDark={isDark} lines={2} className="mb-4" />

        {/* 수상 영역 (옵션) */}
        <div className="mb-4">
          <SkeletonBadge isDark={isDark} className="w-32" />
        </div>

        {/* 역할 섹션 */}
        <div className="mb-4">
          <Skeleton isDark={isDark} className="h-4 w-20 mb-2" />
          <SkeletonText isDark={isDark} lines={1} />
        </div>

        {/* 기술 스택 뱃지들 */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonBadge key={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
};