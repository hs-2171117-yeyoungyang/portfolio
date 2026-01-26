import { useTheme } from '../../contexts/ThemeContext';
import { useMemojiSlider } from '../../hooks/useMemojiSlider';
import { memojiItems } from '../../data/memojis';

interface ProfileImageProps {
  isVisible: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ isVisible }) => {
  const { isDark } = useTheme();
  const { currentIndex, goToIndex } = useMemojiSlider({
    totalItems: memojiItems.length
  });

  return (
    <div 
      className={`${
        isDark ? 'bg-gray-800' : 'bg-gray-100'
      } rounded-2xl p-6 sm:p-8 md:p-12 flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      }`}
    >
      <div className="text-center">
        {/* 미모티콘 컨테이너 */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4">
          {/* 배경 그라데이션 효과 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl animate-pulse" />
          
          {/* 미모티콘 이미지들 */}
          {memojiItems.map((memoji, index) => (
            <div
              key={memoji.alt}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                currentIndex === index
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-75 rotate-12'
              }`}
            >
              <img
                src={memoji.src}
                alt={memoji.alt}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* 인디케이터 점들 */}
        <div className="flex justify-center gap-2 mb-3">
          {memojiItems.map((memoji, index) => (
            <button
              key={memoji.alt}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index
                  ? 'bg-blue-500 w-6'
                  : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`${memoji.description} 미모티콘으로 변경`}
            />
          ))}
        </div>

        {/* 현재 미모티콘 설명 */}
        <p className={`${
          isDark ? 'text-gray-400' : 'text-gray-600'
        } text-xs sm:text-sm transition-opacity duration-300`}>
          {memojiItems[currentIndex].description}
        </p>
      </div>
    </div>
  );
};