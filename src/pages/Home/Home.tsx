import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "메디지 (Medeasy)",
      period: "2024",
      description: "디지털 소외계층을 위한 복약 관리 도우미",
      tech: ["React Native", "JavaScript", "REST API"],
      awards: ["한성대학교 캡스톤디자인 장려상", "K-PaaS 활용 공모전 특별상"],
      role: "약 검색 및 상세정보 UI 구현, AI 음성 챗봇 및 보호자 케어 인터페이스 구성",
      image: ""
    },
    {
      title: "PLog",
      period: "2024",
      description: "부하테스트 자동화 시스템",
      tech: ["React", "TypeScript", "SSE"],
      role: "부하 테스트 실행 페이지 UI 구현, 테스트 결과 보고서 생성 및 PDF 변환 기능",
      image: ""
    },
    {
      title: "수북(Book)",
      period: "2023",
      description: "독서 기록 도우미 애플리케이션",
      tech: ["Flutter", "Dart", "Figma"],
      role: "요구사항 분석에 따른 전체적인 화면 UI/UX 설계 및 구현",
      image: ""
    },
    {
      title: "Rummikub With Chat",
      period: "2023",
      description: "Java 기반 실시간 루미큐브 게임",
      tech: ["Java", "Socket", "GUI"],
      role: "오픈소스 기반 게임 로직 수정, 소켓 통신, GUI 설계 및 구현",
      image: ""
    },
    {
      title: "LookUpTheSky",
      period: "2022",
      description: "날씨 정보 알리미 애플리케이션",
      tech: ["Java", "Android", "기상청 API"],
      role: "기상청 API 연동, UI/UX 설계, 인터페이스 및 기능 구현",
      image: ""
    },
    {
      title: "Daymond",
      period: "2021",
      description: "자동 테마 추천 다이어리 애플리케이션",
      tech: ["Swift", "XCode", "네이버 API"],
      role: "UI/UX 설계, 사진 기반 자동 테마 생성 기능 구현",
      image: ""
    }
  ];

  const skills = {
    "Frontend": ["React", "React Native", "Flutter", "TypeScript", "JavaScript"],
    "Mobile": ["Swift", "Android", "iOS"],
    "Backend": ["Java", "REST API", "Socket Programming"],
    "Tools": ["Figma", "Git", "Xcode", "Android Studio"]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold">Portfolio</a>
          <div className="flex items-center gap-6">
            <a href="#about" className={`hover:text-blue-500 transition-colors ${activeSection === 'about' ? 'text-blue-500' : ''}`}>About</a>
            <a href="#skills" className={`hover:text-blue-500 transition-colors ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Skills</a>
            <a href="#projects" className={`hover:text-blue-500 transition-colors ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Projects</a>
            <a href="#contact" className={`hover:text-blue-500 transition-colors ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contact</a>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>안녕하세요</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            프론트엔드 개발자
            <br />
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>포트폴리오</span>
          </h1>
          <p className={`text-lg md:text-xl mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            사용자 경험을 최우선으로 생각하며,<br />
            끊임없이 성장하는 개발자입니다.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-8 py-4 rounded-full font-medium transition-all ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            프로젝트 보기
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto opacity-50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-2xl p-12 flex items-center justify-center`}>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4"></div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>프로필 이미지</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">사용자 중심의 개발</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  디지털 소외계층을 고려한 접근성 높은 UI/UX 설계부터 실시간 통신을 활용한 인터랙티브한 애플리케이션까지, 
                  사용자의 니즈를 최우선으로 생각하며 개발합니다.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">지속적인 성장</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  React Native, Flutter, Swift 등 다양한 프레임워크를 경험하며 
                  각 기술의 장단점을 이해하고 프로젝트에 적합한 기술을 선택하는 능력을 키워왔습니다.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">문제 해결 능력</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  오픈소스 코드를 분석하고 개선하며, 복잡한 요구사항을 단계적으로 해결하는 과정에서 
                  견고한 문제 해결 능력을 키웠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill} className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-4 py-2 text-sm`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                <div className={`h-48 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center`}>
                  <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>프로젝트 이미지</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.period}</span>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  {project.awards && (
                    <div className="mb-4">
                      {project.awards.map((award, i) => (
                        <span key={i} className={`inline-block ${isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'} text-xs px-3 py-1 rounded-full mr-2 mb-2`}>
                          🏆 {award}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mb-4">
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} mb-2`}>주요 역할</p>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'} text-xs px-3 py-1 rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12 text-lg`}>
            새로운 기회와 협업을 기다리고 있습니다.<br />
            언제든지 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:your.email@example.com"
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <Mail size={20} />
              <span>이메일 보내기</span>
            </a>
            <a
              href="https://github.com/hs-2171117-yeyoungyang"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDark ? 'bg-gray-800/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <p>© 2025 Frontend Developer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;