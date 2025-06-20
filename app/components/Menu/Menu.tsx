'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';

import CoursesIcon from './courses.svg';
import ServicesIcon from './services.svg';
import BooksIcon from './books.svg';
import ProductsIcon from './products.svg';

import styles from './menu.module.scss';
import { IMenuItem } from '@/types/MenuItem';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FirstLevelCategoryId } from '@/app/components';

interface IfirstLevelCategories {
  route: string;
  name: string;
  Icon: FC;
  id: number;
}

const firstLevelCategories: IfirstLevelCategories[] = [
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

interface MenuProps {
  data: IMenuItem[][];
}

export const Menu = ({ data }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [secondLevelMenus, setSecondLevelMenus] = useState<IMenuItem[][]>(data);

  const { alias } = useParams();

  const openSecondLevel = (secondCategory: string) => {
    const newMenus = secondLevelMenus.map((menu) =>
      menu.map((i) => {
        if (i._id.secondCategory === secondCategory) {
          return {
            ...i,
            isOpen: !i.isOpen,
          };
        }
        return i;
      }),
    );

    setSecondLevelMenus(newMenus);
  };

  return (
    <>
      <ul className={styles.firstLevelWrapper}>
        {firstLevelCategories.map(({ id, name, Icon, route }) => (
          <li key={id}>
            <div
              /*  <Link href={`/${route}`} */
              className={clsx(styles.firstLevelItem, {
                [styles.firstLevelItemActive]: activeCategory == id,
              })}
              onClick={() => setActiveCategory(id)}
            >
              <Icon />
              <span>{name}</span>
            </div>
            <ul
              className={clsx(styles.secondLevelWrapper, {
                [styles.secondLevelWrapperShow]: activeCategory == id,
              })}
            >
              {secondLevelMenus[id] &&
                secondLevelMenus[id].map((item) => {
                  const isIncludes = item.pages
                    .map((p) => p.alias)
                    .includes(alias as string);

                  return (
                    <li key={item._id.secondCategory}>
                      <div
                        onClick={() => openSecondLevel(item._id.secondCategory)}
                        className={clsx(styles.secondLevelItem, {
                          [styles.secondLevelItemActive]: true,
                        })}
                      >
                        {item._id.secondCategory}
                      </div>
                      <ul
                        className={clsx(
                          styles.thirdLevelWrapper,
                          (isIncludes || item.isOpen) &&
                            styles.thirdLevelWrapperShow,
                        )}
                      >
                        {item.pages.map((item) => (
                          <li key={item._id}>
                            <Link
                              href={`/${route}/${item.alias}`}
                              className={clsx(styles.thirdLevelItem, {
                                [styles.thirdLevelItemActive]:
                                  alias == item.alias,
                              })}
                            >
                              {item.category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
