import React from 'react';

import ReactIcon from '@/assets/icons/react.svg?react';
import TypeScriptIcon from '@/assets/icons/typescript.svg?react';
import JavaScriptIcon from '@/assets/icons/javascript.svg?react';
import FlutterIcon from '@/assets/icons/flutter.svg?react';
import SwiftIcon from '@/assets/icons/swift.svg?react';
import GitIcon from '@/assets/icons/git.svg?react';
import GithubIcon from '@/assets/icons/github.svg?react';
import FigmaIcon from '@/assets/icons/figma.svg?react';
import JavaIcon from '@/assets/icons/java.svg?react';
import SpringIcon from '@/assets/icons/spring.svg?react';
import VSCodeIcon from '@/assets/icons/vscode.svg?react';
import IntelliJIcon from '@/assets/icons/intellijidea.svg?react';
import AndroidStudioIcon from '@/assets/icons/androidstudio.svg?react';
import PythonIcon from '@/assets/icons/python.svg?react';
import CIcon from '@/assets/icons/c.svg?react';
import CppIcon from '@/assets/icons/cpp.svg?react';
import MySQLIcon from '@/assets/icons/mysql.svg?react';
import OracleIcon from '@/assets/icons/oracle.svg?react';
import VisualStudioIcon from '@/assets/icons/visualstudio.svg?react';
import XcodeIcon from '@/assets/icons/xcode.svg?react';
import EclipseIcon from '@/assets/icons/eclipseide.svg?react';
import LinuxIcon from '@/assets/icons/linux.svg?react';
import WindowsIcon from '@/assets/icons/windows.svg?react';
import NotionIcon from '@/assets/icons/notion.svg?react';
import CSSIcon from '@/assets/icons/css.svg?react';
import TailwindIcon from '@/assets/icons/tailwindcss.svg?react';
import APIIcon from '@/assets/icons/api.svg?react';

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  flutter: FlutterIcon,
  swift: SwiftIcon,
  git: GitIcon,
  github: GithubIcon,
  figma: FigmaIcon,
  java: JavaIcon,
  spring: SpringIcon,
  vscode: VSCodeIcon,
  intellij: IntelliJIcon,
  androidstudio: AndroidStudioIcon,
  python: PythonIcon,
  c: CIcon,
  cpp: CppIcon,
  mysql: MySQLIcon,
  oracle: OracleIcon,
  visualstudio: VisualStudioIcon,
  xcode: XcodeIcon,
  eclipse: EclipseIcon,
  linux: LinuxIcon,
  windows: WindowsIcon,
  notion: NotionIcon,
  css: CSSIcon,
  tailwind: TailwindIcon,
  api: APIIcon,
};

interface Props {
  name: string;
  color: string;
}

export const SkillIcon = ({ name, color }: Props) => {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return <Icon className="w-6 h-6" style={{ fill: color }} />;
};