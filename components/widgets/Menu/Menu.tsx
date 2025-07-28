'use client';

import { KeyboardEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/components';
import { firstLevelCategories } from '@/helpers';
import { IMenuItem } from '@/types';

import styles from './menu.module.scss';
import {
  secondLevelVariants,
  secondLevelVariantsChildren,
  thirdLevelVariants,
  thirdLevelVariantsChildren,
} from './menuVariants';

interface MenuProps {
  data: IMenuItem[][];
}

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
        return {
          ...i,
          isOpen: false,
        };
      }),
    );
    setSecondLevelMenus(newMenus);
  };

  const openSecondLevelByKeyboard = (
    e: KeyboardEvent<HTMLButtonElement>,
    secondCategory: string,
  ) => {
    if (e.code == 'Space' || e.key == 'Enter') {
      e.preventDefault();

      openSecondLevel(secondCategory);
    }
  };

  return (
    <nav>
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
            <motion.ul
              layout
              className={clsx(styles.secondLevelWrapper, {
                [styles.secondLevelWrapperShow]: type == route,
              })}
              initial={type == route ? 'opened' : 'closed'}
              animate={type == route ? 'opened' : 'closed'}
              variants={secondLevelVariants}
            >
              {secondLevelMenus[id] &&
                secondLevelMenus[id].map((item) => {
                  const isIncludes = item.pages
                    .map((p) => p.alias)
                    .includes(alias as string);

                  const dynamicHeight = item.pages.length * 44 + 16;

                  return (
                    <motion.li
                      key={item._id.secondCategory}
                      variants={secondLevelVariantsChildren}
                      custom={dynamicHeight}
                    >
                      <Button
                        appearance="transparent"
                        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
                          openSecondLevelByKeyboard(e, item._id.secondCategory)
                        }
                        onClick={() => openSecondLevel(item._id.secondCategory)}
                        className={styles.secondLevelItem}
                        aria-expanded={isIncludes || item.isOpen}
                      >
                        {item._id.secondCategory}
                      </Button>
                      <motion.ul
                        layout
                        initial={
                          isIncludes || item.isOpen ? 'opened' : 'closed'
                        }
                        animate={
                          isIncludes || item.isOpen ? 'opened' : 'closed'
                        }
                        variants={thirdLevelVariants}
                        className={styles.thirdLevelWrapper}
                      >
                        {item.pages.map((i) => (
                          <motion.li
                            key={i._id}
                            variants={thirdLevelVariantsChildren}
                          >
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
                    </motion.li>
                  );
                })}
            </motion.ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
