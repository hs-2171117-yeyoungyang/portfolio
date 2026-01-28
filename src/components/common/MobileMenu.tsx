import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { SectionId } from '../../types';

interface MobileMenuProps {
  activeSection: SectionId;
  navItems: { href: string; label: string; id: SectionId }[];
}

export const MobileMenu = ({ activeSection, navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg ${
          isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
        } transition-colors md:hidden`}
        aria-label="메뉴 열기"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div
            className={`fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] z-40 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            } shadow-lg md:hidden overflow-y-auto`}
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`py-3 px-4 rounded-lg text-lg hover:text-blue-500 transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-500 bg-blue-500/10'
                      : isDark
                      ? 'hover:bg-gray-800'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};