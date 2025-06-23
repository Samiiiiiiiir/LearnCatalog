import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { FC } from 'react';

export enum FirstLevelCategoryId {
  Courses,
  Services,
  Books,
  Products,
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
    route: 'services',
    name: 'Services',
    Icon: ServicesIcon,
    id: FirstLevelCategoryId.Services,
  },
  {
    route: 'books',
    name: 'Books',
    Icon: BooksIcon,
    id: FirstLevelCategoryId.Books,
  },
  {
    route: 'products',
    name: 'Products',
    Icon: ProductsIcon,
    id: FirstLevelCategoryId.Products,
  },
];
