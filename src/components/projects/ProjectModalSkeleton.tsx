import { Skeleton, SkeletonText, SkeletonTitle, SkeletonBadge } from '../common/Skeleton';

interface ProjectModalSkeletonProps {
  isDark: boolean;
}

export const ProjectModalSkeleton = ({ isDark }: ProjectModalSkeletonProps) => {
  return (
    <>
      {/* 상단 이미지 + 기본 정보 섹션 */}
      <div className={`${isDark ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-80'} rounded-3xl mb-6 shadow-lg overflow-hidden`}>
        {/* 이미지 영역 */}
        <div className="w-full aspect-video">
          <Skeleton isDark={isDark} className="w-full h-full" />
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-6 sm:p-8">
          {/* 타이틀 & 메타 정보 */}
          <div className="mb-4">
            <SkeletonTitle isDark={isDark} className="h-10 w-1/2 mb-4" />
            <div className="flex gap-3">
              <Skeleton isDark={isDark} className="h-5 w-24" />
              <Skeleton isDark={isDark} className="h-5 w-2" />
              <Skeleton isDark={isDark} className="h-5 w-32" />
            </div>
          </div>

          {/* 설명 */}
          <SkeletonText isDark={isDark} lines={2} className="mb-4" />

          {/* 기여도 뱃지들 */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} isDark={isDark} className="h-8 w-24 rounded-full" />
              ))}
            </div>
          </div>

          {/* 수상 뱃지들 */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {[1, 2].map((i) => (
                <SkeletonBadge key={i} isDark={isDark} className="w-28" />
              ))}
            </div>
          </div>

          {/* 기술 스택 뱃지들 */}
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonBadge key={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단 상세 정보 섹션 */}
      <div className={`${isDark ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-80'} rounded-3xl p-6 sm:p-8 shadow-lg`}>
        {/* 주요 역할 */}
        <div className="mb-6">
          <Skeleton isDark={isDark} className="h-6 w-24 mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <SkeletonText key={i} isDark={isDark} lines={1} />
            ))}
          </div>
        </div>

        {/* 성과 */}
        <div className="mb-6">
          <Skeleton isDark={isDark} className="h-6 w-16 mb-3" />
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <SkeletonText key={i} isDark={isDark} lines={1} />
            ))}
          </div>
        </div>

        {/* 느낀 점 */}
        <div className="mb-6">
          <Skeleton isDark={isDark} className="h-6 w-20 mb-3" />
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <SkeletonText key={i} isDark={isDark} lines={1} />
            ))}
          </div>
        </div>

        {/* GitHub 버튼 */}
        <div className="flex justify-end pt-4 border-t border-gray-700">
          <Skeleton isDark={isDark} className="h-12 w-32 rounded-full" />
        </div>
      </div>
    </>
  );
};