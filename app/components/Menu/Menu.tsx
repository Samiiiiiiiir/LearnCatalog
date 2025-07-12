'use client';

import { KeyboardEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, stagger } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { firstLevelCategories } from '@/helpers';
import { IMenuItem } from '@/types';

import styles from './menu.module.scss';

interface MenuProps {
  data: IMenuItem[][];
}

const variants = {
  visible: {
    marginTop: '10px',
    transition: {
      delayChildren: stagger(0.03),
    },
  },
  hidden: {
    marginTop: 0,
  },
};

const variantsChildren = {
  visible: {
    opacity: 1,
    marginBottom: 10,
    maxHeight: 44,
  },
  hidden: {
    opacity: 0,
    marginBottom: 0,
    maxHeight: 0,
  },
};

export const Menu = ({ data }: MenuProps) => {
  const [secondLevelMenus, setSecondLevelMenus] = useState<IMenuItem[][]>(data);

  const { type, alias } = useParams();

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

  const openSecondLevelByKeyboard = (
    e: KeyboardEvent<HTMLDivElement>,
    secondCategory: string,
  ) => {
    if (e.code == 'Space' || e.key == 'Enter') {
      e.preventDefault();

      openSecondLevel(secondCategory);
    }
  };

  return (
    <ul className={styles.firstLevelWrapper}>
      {firstLevelCategories.map(({ id, name, Icon, route }) => (
        <li key={id}>
          <Link
            href={`/${route}`}
            className={clsx(styles.firstLevelItem, {
              [styles.firstLevelItemActive]: type == route,
            })}
          >
            <Icon />
            <span>{name}</span>
          </Link>
          <ul
            className={clsx(styles.secondLevelWrapper, {
              [styles.secondLevelWrapperShow]: type == route,
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
                      tabIndex={0}
                      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
                        openSecondLevelByKeyboard(e, item._id.secondCategory)
                      }
                      onClick={() => openSecondLevel(item._id.secondCategory)}
                      className={styles.secondLevelItem}
                    >
                      {item._id.secondCategory}
                    </div>
                    <motion.ul
                      layout
                      initial={isIncludes || item.isOpen ? 'visible' : 'hidden'}
                      animate={isIncludes || item.isOpen ? 'visible' : 'hidden'}
                      variants={variants}
                      className={styles.thirdLevelWrapper}
                    >
                      {item.pages.map((i) => (
                        <motion.li key={i._id} variants={variantsChildren}>
                          <Link
                            href={`/${route}/${i.alias}`}
                            className={clsx(styles.thirdLevelItem, {
                              [styles.thirdLevelItemActive]: alias == i.alias,
                            })}
                            tabIndex={isIncludes || item.isOpen ? 0 : -1}
                          >
                            {i.category}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </li>
                );
              })}
          </ul>
        </li>
      ))}
    </ul>
  );
};
