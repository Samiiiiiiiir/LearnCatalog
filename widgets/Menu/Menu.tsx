'use client';

import { KeyboardEvent } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/ui';
import { firstLevelCategories } from '@/helpers';
import { IMenuItem } from '@/types';

import {
  secondLevelVariants,
  secondLevelVariantsChildren,
  thirdLevelVariants,
  thirdLevelVariantsChildren,
} from './menuVariants';
import { useMenu } from './hooks/useMenu';

import styles from './menu.module.scss';

interface MenuProps {
  data: IMenuItem[][];
}

export const Menu = ({ data }: MenuProps) => {
  const { type, alias } = useParams();

  const { secondLevelMenus, openSecondLevel, openSecondLevelByKeyboard } =
    useMenu(data);

  return (
    <nav>
      <ul className={styles.firstLevelWrapper}>
        {firstLevelCategories.map(({ id, name, Icon, route }) => (
          <li key={id}>
            <Link
              href={`/${route}`}
              className={clsx(styles.firstLevelItem, {
                [styles.firstLevelItemActive]: type == route,
                [styles.firstLevelItemActiveWithAlias]: type == route && alias,
              })}
            >
              <Icon />
              <span>{name}</span>
            </Link>
            <motion.ul
              layout
              className={styles.secondLevelWrapper}
              initial={type == route ? 'opened' : 'closed'}
              animate={type == route ? 'opened' : 'closed'}
              variants={secondLevelVariants}
              inert={type !== route}
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
