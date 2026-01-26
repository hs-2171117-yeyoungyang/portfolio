import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { aboutContent } from '../../data/abouts';
import { ProfileImage } from '../abouts/ProfileImage';
import { AboutCard } from '../abouts/AboutCard';

export const AboutSection = () => {
  const { isDark } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${
        isDark ? 'bg-gray-800/50' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div ref={imageRef}>
            <ProfileImage isVisible={imageVisible} />
          </div>

          <div ref={contentRef} className="space-y-4 sm:space-y-6">
            {aboutContent.map((item, index) => (
              <AboutCard 
                key={item.title}
                item={item}
                index={index}
                isVisible={contentVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};