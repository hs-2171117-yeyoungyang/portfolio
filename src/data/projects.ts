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
    period: "2025.01 ~ 2025.06",
    year: "2025",
    description: "디지털 소외계층을 위한 복약 관리 도우미",
    tech: ["React Native", "JavaScript", "REST API"],
    awards: [
      "한성대학교 캡스톤디자인 장려상",
      "K-PaaS 활용 공모전 특별상"
    ],
    image: MedeasyImg,
    github: "https://github.com/team-medeasy/medeasy-frontend",
    teamSize: 5,

    role: [
      "약 검색 및 상세정보 UI 구현",
      "AI 음성 챗봇 및 보호자 케어 인터페이스 설계 및 구현",
      "폰트 크기 설정 기능 개발",
      "REST API 연동 및 데이터 처리"
    ],

    achievements: [
      "디지털 소외계층을 고려한 접근성 중심 복약 관리 애플리케이션 구현",
      "실제 사용 시나리오 기반 기능 구성으로 서비스 완성도 향상",
      "캡스톤디자인 및 공모전 수상으로 프로젝트 기획·구현 역량 검증"
    ],

    learnings: [
      "사용자 특성에 따라 UI/UX 설계 방식이 크게 달라진다는 점을 체감함",
      "프론트엔드 개발에서 접근성과 사용성이 기능만큼 중요함을 인식함",
      "컴포넌트 단위 구조화가 협업과 유지보수에 미치는 영향을 이해함"
    ]
  },

  {
    title: "PLog",
    period: "2025.07 ~ 2025.09",
    year: "2025",
    description: "부하 테스트 자동화 시스템",
    tech: ["React", "TypeScript", "SSE"],
    image: PlogImg,
    github: "https://github.com/team-Plog/plog-frontend",
    teamSize: 5,

    role: [
      "부하 테스트 실행 페이지 UI 구현",
      "테스트 결과 보고서 생성 및 PDF 변환 기능 구현",
      "컴포넌트 분리 및 재사용 구조 설계",
      "반응형 레이아웃 및 라이트/다크 모드 구현"
    ],

    achievements: [
      "복잡한 인프라 설정 없이 API 성능을 검증할 수 있는 UI 흐름 구현",
      "공통 컴포넌트 구조를 설계해 기능 확장과 유지보수가 용이한 UI 환경 구축",
      "SSE 기반 실시간 차트 대시보드 구현 과정에 참여"
    ],

    learnings: [
      "프론트엔드의 역할은 데이터를 단순히 출력하는 것이 아니라 이해하기 쉽게 전달하는 것임을 인식함",
      "실시간 데이터 흐름과 화면 반영 방식에 대한 이해를 높임",
      "다양한 사용 환경을 고려한 반응형 UI 설계의 중요성을 체감함"
    ]
  },

  {
    title: "수북(Book)",
    period: "2024.09 ~ 2024.11",
    year: "2024",
    description: "독서 기록 도우미 애플리케이션",
    tech: ["Flutter", "Dart", "Figma"],
    image: SoobookImg,
    github: "https://github.com/Advanced-MobileProgramming/flutter",
    teamSize: 4,

    role: [
      "요구사항 분석을 기반으로 전체 화면 UI/UX 설계",
      "Figma를 활용한 디자인 시안 제작",
      "Flutter 위젯 기반 화면 구현"
    ],

    achievements: [
      "팀 프로젝트로 진행한 첫 프론트엔드 개발 경험",
      "기획 단계의 요구사항을 실제 앱 화면으로 구현하는 전 과정 경험",
      "디자인 시안을 Flutter UI로 옮기며 화면 구조 설계 역량 강화"
    ],

    learnings: [
      "기획·디자인·구현이 유기적으로 연결된 프론트엔드 개발 흐름을 이해함",
      "Flutter 위젯 기반 구조를 경험하며 컴포넌트 분해와 재사용의 중요성을 인식함",
      "요구사항을 사용자에게 자연스럽게 전달하는 UI 설계의 중요성을 체감함"
    ]
  },

  {
    title: "Rummikub With Chat",
    period: "2024.10 ~ 2024.12",
    year: "2024",
    description: "Java 기반 실시간 루미큐브 게임",
    tech: ["Java", "Socket", "GUI"],
    image: RummikubwithchatImg,
    github: "https://github.com/RummikubWithChat/RummikubWithChat",
    teamSize: 2,

    role: [
      "오픈소스 기반 게임 로직 분석 및 수정",
      "Java 소켓 통신을 활용한 실시간 멀티플레이 구현",
      "GUI 설계 및 사용자 인터페이스 개선",
      "게임 진행 중 발생하던 로직 오류 수정"
    ],

    achievements: [
      "콘솔 기반 오픈소스 게임을 실시간 멀티플레이 게임으로 확장",
      "게임 진행 로직 전반을 개선해 안정성과 완성도 향상",
      "효과음 추가 및 UI 개선으로 사용자 경험 강화"
    ],

    learnings: [
      "오픈소스 코드를 분석하고 구조를 이해하는 경험을 통해 문제 해결 역량을 강화함",
      "실시간 통신 구조와 Java 소켓 프로그래밍에 대한 이해를 높임",
      "복잡한 로직을 단계적으로 개선하는 과정에서 개발에 대한 자신감을 얻음"
    ]
  },

  {
    title: "LookUpTheSky",
    period: "2024.05 ~ 2024.06",
    year: "2024",
    description: "날씨 정보 알리미 애플리케이션",
    tech: ["Java", "Android", "기상청 API"],
    image: LookuptheskyImg,
    github: "https://github.com/hs-2171117-yeyoungyang/LookUpTheSky",
    teamSize: 1,

    role: [
      "Android Studio 환경에서 애플리케이션 설계 및 구현",
      "기상청 API 발급 및 데이터 연동",
      "날씨 정보에 따른 UI 및 기능 구현"
    ],

    achievements: [
      "API 발급부터 데이터 연동, 화면 출력까지 전 과정을 단독으로 구현",
      "기온과 날씨 상태에 따라 시각적으로 구분되는 UI 구성",
      "추천 옷차림 기능을 직접 기획 및 적용"
    ],

    learnings: [
      "외부 API 데이터를 실제 애플리케이션에 연동하는 개발 흐름을 이해함",
      "데이터 처리와 시각적 표현이 함께 고려되어야 함을 체감함",
      "개인 아이디어를 기능과 UI로 구현하며 애플리케이션 개발의 전반을 경험함"
    ]
  },

  {
    title: "Daymond",
    period: "2025.05 ~ 2025.06",
    year: "2025",
    description: "자동 테마 추천 다이어리 애플리케이션",
    tech: ["Swift", "Xcode", "네이버 API"],
    image: DaymondImg,
    github: "https://github.com/hs-2171117-yeyoungyang/Daymond",
    teamSize: 1,

    role: [
      "Xcode 환경에서 iOS 애플리케이션 기획 및 구현",
      "Figma를 활용한 UI/UX 설계",
      "사진 기반 자동 테마 생성 기능 구현",
      "네이버 API 연동을 통한 뉴스 데이터 제공"
    ],

    achievements: [
      "사진 색상을 기반으로 자동 테마를 생성하는 다이어리 애플리케이션 구현",
      "사용자 감성을 반영한 UI와 기능을 직접 설계 및 적용",
      "외부 API를 활용해 일기 작성 경험을 확장"
    ],

    learnings: [
      "iOS 플랫폼 특유의 UI 구성 방식과 개발 흐름을 경험함",
      "사용자 감성과 취향이 서비스 경험에 직접적으로 영향을 미친다는 점을 체감함",
      "프론트엔드 개발에서 기능 구현을 넘어 사용자 경험 설계의 중요성을 인식함"
    ]
  }
];
