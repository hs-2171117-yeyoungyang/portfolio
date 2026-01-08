import React from 'react';
import { Mail, Github } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const contactLinks = [
  {
    href: 'mailto:your.email@example.com',
    icon: Mail,
    label: '이메일 보내기'
  },
  {
    href: 'https://github.com/hs-2171117-yeyoungyang',
    icon: Github,
    label: 'GitHub',
    external: true
  }
];

export const ContactSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12 text-lg`}>
          새로운 기회와 협업을 기다리고 있습니다.<br />
          언제든지 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};