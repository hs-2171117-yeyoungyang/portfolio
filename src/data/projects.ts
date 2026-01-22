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
    awards: ["한성대학교 캡스톤디자인 장려상", "K-PaaS 활용 공모전 특별상"],
    role: "약 검색 및 상세정보 UI 구현, AI 음성 챗봇 및 보호자 케어 인터페이스, 폰트 크기 설정 기능",
    image: MedeasyImg,
    github: "https://github.com/team-medeasy/medeasy-frontend",
    teamSize: 5,
    detailDescription: "약 검색 및 상세정보 UI 구현, AI 음성 챗봇 및 보호자 케어 인터페이스 구성, 폰트 크기 설정 기능 구현, REST API 연동 작업을 담당했습니다.",
    achievements: "디지털 소외계층을 고려한 폰트 크기 조절이나 음성 챗봇 인터페이스를 적용한 복약 관리 애플리케이션을 구현했으며, 실제 시나리오를 기반으로 한 기능 구성으로 서비스 완성도를 높였습니다.",
    learnings: "사용자 특성에 따라 UI/UX 설계 방식이 달라져야 함을 체감했으며, 프론트엔드 개발에서 접근성과 사용성의 중요성을 깊이 이해하는 계기가 되었습니다. 또한 화면을 단순히 구현하는 데서 그치지 않고, 컴포넌트 단위로 구조화하는 것이 유지보수성과 협업에 얼마나 중요한지 체감했습니다."
  },
  {
    title: "PLog",
    period: "2025.07 ~ 2025.09",
    year: "2025",
    description: "부하테스트 자동화 시스템",
    tech: ["React", "TypeScript", "SSE"],
    role: "부하 테스트 실행 페이지 UI 구현, 테스트 결과 보고서 생성 및 PDF 변환 기능",
    image: PlogImg,
    github: "https://github.com/team-Plog/plog-frontend",
    teamSize: 5,
    detailDescription: "부하 테스트 실행 페이지 UI 구현, 테스트 결과 보고서 생성 및 PDF 변환 기능 구현, 컴포넌트 분리 및 재사용 구조 설계, 반응형 레이아웃 처리, 라이트/다크 모드 기능 구현을 담당했습니다.",
    achievements: "소규모 개발팀이 복잡한 인프라 설정이나 수동 작업 없이 API 성능을 검증할 수 있도록, 부하 테스트 실행 흐름에 맞춘 사용자 인터페이스 구현에 기여했습니다. 공통 컴포넌트 분리와 스타일 관리 환경을 구축하여 기능 확장과 유지보수가 용이한 UI 구조를 마련했습니다. 또한 SSE 기반 실시간 차트 대시보드 구현 과정에 참여하며, 실시간 데이터 처리 흐름과 화면 반영 방식에 대한 이해를 높일 수 있었습니다.",
    learnings: "데이터 중심 서비스에서 프론트엔드의 역할은 단순히 정보를 출력하는 것이 아니라, 사용자가 데이터를 직관적으로 이해할 수 있도록 전달하는 데 있음을 깨달았습니다. 특히 반응형 레이아웃과 UI 구성에 대한 이해를 넓히며, 다양한 사용 환경을 고려한 프론트엔드 설계의 중요성을 체감하는 계기가 되었습니다."
  },
  {
    title: "수북(Book)",
    period: "2024.09 ~ 2024.11",
    year: "2024",
    description: "독서 기록 도우미 애플리케이션",
    tech: ["Flutter", "Dart", "Figma"],
    role: "UI/UX 설계, 요구사항 분석에 따른 전체적인 화면 구현",
    image: SoobookImg,
    github: "https://github.com/Advanced-MobileProgramming/flutter",
    teamSize: 4,
    detailDescription: "요구사항 분석에 따른 전체적인 화면 UI/UX 설계 및 구현을 담당했습니다.",
    achievements: "팀 프로젝트로 진행한 첫 프론트엔드 개발 경험으로, 서비스의 주요 기능에 대한 요구사항을 정리하고 이를 바탕으로 Figma를 활용한 UI/UX 설계와 화면 구현을 담당했습니다. Flutter 환경에서 화면 구조를 구성하며, 디자인 시안이 실제 앱 화면으로 구현되는 전 과정을 경험할 수 있었습니다.",
    learnings: "프론트엔드 개발의 시작 단계에서 기획과 디자인, 구현이 유기적으로 연결된다는 점을 체감할 수 있었습니다. 단순히 화면을 만드는 것을 넘어, 요구사항을 이해하고 이를 사용자에게 자연스럽게 전달하는 UI를 설계하는 과정의 중요성을 배우는 계기가 되었습니다."
  },
  {
    title: "Rummikub With Chat",
    period: "2024.10 ~ 2024.12",
    year: "2024",
    description: "Java 기반 실시간 루미큐브 게임",
    tech: ["Java", "Socket", "GUI"],
    role: "오픈소스 기반 게임 로직 수정, Socket 통신, GUI 설계 및 구현",
    image: RummikubwithchatImg,
    github: "https://github.com/RummikubWithChat/RummikubWithChat",
    teamSize: 2,
    detailDescription: "오픈소스 기반 게임 로직 수정, java 소켓 통신 프로그래밍, GUI 설계 및 구현을 담당했습니다.",
    achievements: "콘솔 기반 오픈소스 게임 로직을 분석·수정하여, Java 소켓 통신을 활용한 실시간 멀티플레이 게임으로 확장했습니다. 게임 진행 로직을 전반적으로 수정하고, GUI를 새롭게 설계했으며 효과음을 추가해 사용자 경험과 완성도를 높였습니다. 기존 로직에 존재하던 오류를 직접 수정하며 안정성을 개선했습니다.",
    learnings: "오픈소스 코드를 직접 분석하고 수정하는 과정이 쉽지는 않았지만, 구조를 이해하며 하나씩 개선해 나가는 과정에서 큰 성취감을 느꼈습니다. 특히 실시간 통신 구조와 Java 소켓 프로그래밍에 대한 이해를 높일 수 있었고, 평소 즐기던 게임의 내부 로직을 코드로 다뤄본 경험이 인상 깊었습니다."
  },
  {
    title: "LookUpTheSky",
    period: "2024.05 ~ 2024.06",
    year: "2024",
    description: "날씨 정보 알리미 애플리케이션",
    tech: ["Java", "Android", "기상청 API"],
    role: "UI/UX 설계, 기상청 API, 인터페이스 및 기능 구현",
    image: LookuptheskyImg,
    github: "https://github.com/hs-2171117-yeyoungyang/LookUpTheSky",
    teamSize: 1,
    detailDescription: "기상청 api 준비 및 연결, UI/UX 설계, 인터페이스 및 기능 구현을 담당했습니다.",
    achievements: "기상청 API 발급부터 데이터 연동, 화면 출력까지 애플리케이션 개발 전 과정을 단독으로 구현했습니다. 기온에 따라 텍스트 색상을 변경하고, 날씨 상태에 맞는 이미지와 추천 옷차림을 직접 제작해 적용함으로써 사용자에게 직관적인 정보를 제공하는 화면을 구성했습니다.",
    learnings: "외부 API를 실제 애플리케이션에 연동해 데이터를 활용하는 경험을 통해, 프론트엔드 개발에서 데이터 처리와 시각적 표현이 함께 고려되어야 함을 이해하게 되었습니다. 나만의 아이디어를 기능과 UI로 구현하며, 개인 애플리케이션 개발의 첫걸음을 내딛는 계기가 되었습니다."
  },
  {
    title: "Daymond",
    period: "2025.05 ~ 2025.06",
    year: "2025",
    description: "자동 테마 추천 다이어리 애플리케이션",
    tech: ["Swift", "XCode", "네이버 API"],
    role: "UI/UX 설계, 사진 기반 자동 테마 생성 기능 구현",
    image: DaymondImg,
    github: "https://github.com/hs-2171117-yeyoungyang/Daymond",
    teamSize: 1,
    detailDescription: "UI/UX 설계, 인터페이스 및 기능 구현을 담당했습니다.",
    achievements: "개인 미니 프로젝트로 iOS 다이어리 애플리케이션을 기획 및 구현하였습니다. Figma를 활용해 UI/UX를 설계하고, 사용자가 추가한 사진을 기반으로 색상을 추출해 자동으로 테마를 생성하는 기능을 라이브러리를 활용해 구현했습니다. 또한 네이버 API를 연동해 뉴스 데이터를 불러와, 하루 이슈를 참고하며 일기를 작성할 수 있도록 구성했습니다.",
    learnings: "사용자의 취향과 감성을 반영한 기능을 직접 설계하고 구현하며, 프론트엔드 개발의 재미와 가능성을 느낄 수 있었습니다. 단순 기능 구현을 넘어, 사용 경험을 고려한 서비스 설계의 중요성을 다시 한번 인식하는 계기가 되었습니다."
  }
];