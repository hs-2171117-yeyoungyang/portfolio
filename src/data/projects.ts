import type { Project } from '../types';
import MedeasyImg from '../assets/images/medeasy.png';
import PlogImg from '../assets/images/plog.png';
import RummikubwithchatImg from '../assets/images/RummikubWithChat.png';
import DaymondImg from '../assets/images/Daymond.png';
import SoobookImg from '../assets/images/SooBook.png';
import LookuptheskyImg from '../assets/images/LookUpTheSky.png';

export const projects: Project[] = [
  {
    title: "메디지 (MedEasy)",
    period: "2025",
    description: "디지털 소외계층을 위한 복약 관리 도우미",
    tech: ["React Native", "JavaScript", "REST API"],
    awards: ["한성대학교 캡스톤디자인 장려상", "K-PaaS 활용 공모전 특별상"],
    role: "약 검색 및 상세정보 UI 구현, AI 음성 챗봇 및 보호자 케어 인터페이스 구성",
    image: MedeasyImg,
    github: "https://github.com/team-medeasy/medeasy-frontend",
  },
  {
    title: "PLog",
    period: "2025",
    description: "부하테스트 자동화 시스템",
    tech: ["React", "TypeScript", "SSE"],
    role: "부하 테스트 실행 페이지 UI 구현, 테스트 결과 보고서 생성 및 PDF 변환 기능",
    image: PlogImg,
    github: "https://github.com/team-Plog/plog-frontend",
  },
  {
    title: "수북(Book)",
    period: "2024",
    description: "독서 기록 도우미 애플리케이션",
    tech: ["Flutter", "Dart", "Figma"],
    role: "요구사항 분석에 따른 전체적인 화면 UI/UX 설계 및 구현",
    image: SoobookImg,
    github: "https://github.com/Advanced-MobileProgramming/flutter",
  },
  {
    title: "Rummikub With Chat",
    period: "2024",
    description: "Java 기반 실시간 루미큐브 게임",
    tech: ["Java", "Socket", "GUI"],
    role: "오픈소스 기반 게임 로직 수정, 소켓 통신, GUI 설계 및 구현",
    image: RummikubwithchatImg,
    github: "https://github.com/RummikubWithChat/RummikubWithChat",
  },
  {
    title: "LookUpTheSky",
    period: "2024",
    description: "날씨 정보 알리미 애플리케이션",
    tech: ["Java", "Android", "기상청 API"],
    role: "기상청 API 연동, UI/UX 설계, 인터페이스 및 기능 구현",
    image: LookuptheskyImg,
    github: "https://github.com/hs-2171117-yeyoungyang/LookUpTheSky",
  },
  {
    title: "Daymond",
    period: "2025",
    description: "자동 테마 추천 다이어리 애플리케이션",
    tech: ["Swift", "XCode", "네이버 API"],
    role: "UI/UX 설계, 사진 기반 자동 테마 생성 기능 구현",
    image: DaymondImg,
    github: "https://github.com/hs-2171117-yeyoungyang/Daymond",
  }
];