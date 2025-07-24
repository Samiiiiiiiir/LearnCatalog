import { FC } from 'react';

import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';

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
