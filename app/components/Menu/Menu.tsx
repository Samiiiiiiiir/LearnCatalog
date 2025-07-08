'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { firstLevelCategories } from '@/helpers';
import { IMenuItem } from '@/types';
import { motion } from 'framer-motion';

import styles from './menu.module.scss';

interface MenuProps {
  data: IMenuItem[][];
}

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.03,
    },
    marginTop: '10px',
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
                      {item.pages.map((item) => (
                        <motion.li key={item._id} variants={variantsChildren}>
                          <Link
                            href={`/${route}/${item.alias}`}
                            className={clsx(styles.thirdLevelItem, {
                              [styles.thirdLevelItemActive]:
                                alias == item.alias,
                            })}
                          >
                            {item.category}
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
