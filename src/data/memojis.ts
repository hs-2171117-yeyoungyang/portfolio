import type { MemojiItem } from '../types';

import SmilingMemoji from '@/assets/memojis/smiling.svg';
import LaptopMemoji from '@/assets/memojis/laptop.svg';
import IdeaMemoji from '@/assets/memojis/idea.svg';

export const memojiItems: readonly MemojiItem[] = [
  {
    image: SmilingMemoji,
    alt: '웃는 미모티콘',
    description: 'Hello🤚',
  },
  {
    image: LaptopMemoji,
    alt: '노트북 보는 미모티콘',
    description: 'Coding...',
  },
  {
    image: IdeaMemoji,
    alt: '아이디어 떠올리는 미모티콘',
    description: 'Thinking!',
  },
] as const;
