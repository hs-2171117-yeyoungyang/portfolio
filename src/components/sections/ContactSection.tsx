import { Mail, Github } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CONTACT } from '../../data/contact';

const contactLinks = [
  {
    href: CONTACT.email,
    icon: Mail,
    label: '이메일 보내기'
  },
  {
    href: CONTACT.github,
    icon: Github,
    label: 'GitHub',
    external: true
  }
];

export const ContactSection = () => {
  const { isDark } = useTheme();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Contact
        </h2>
        <p 
          ref={descRef}
          className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed transition-all duration-700 ${
            descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          새로운 기회와 협업을 기다리고 있습니다.<br />
          언제든지 연락주세요!
        </p>
        <div ref={linksRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-700 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                } border ${isDark ? 'border-gray-700' : 'border-gray-200'} ${
                  linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};