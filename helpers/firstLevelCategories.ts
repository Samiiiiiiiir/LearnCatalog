import { FC } from 'react';

import { CoursesIcon, BooksIcon } from '@/assets';

export enum FirstLevelCategoryId {
  Courses,
  Books,
}

interface IfirstLevelCategories {
  route: string;
  name: string;
  Icon: FC;
  id: number;
}

export const firstLevelCategories: IfirstLevelCategories[] = [
  {
    route: 'courses',
    name: 'Courses',
    Icon: CoursesIcon,
    id: FirstLevelCategoryId.Courses,
  },
  {
    route: 'books',
    name: 'Books',
    Icon: BooksIcon,
    id: FirstLevelCategoryId.Books,
  },
];
