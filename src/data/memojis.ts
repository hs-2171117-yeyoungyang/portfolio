import type { MemojiItem } from '../types';

export const memojiItems: readonly MemojiItem[] = [
  {
    src: '/src/assets/memojis/smiling.svg',
    alt: '웃는 미모티콘',
    description: 'Hello🤚'
  },
  {
    src: '/src/assets/memojis/laptop.svg',
    alt: '노트북 보는 미모티콘',
    description: 'Coding...'
  },
  {
    src: '/src/assets/memojis/idea.svg',
    alt: '아이디어 떠올리는 미모티콘',
    description: 'Thinking!'
  }
] as const;