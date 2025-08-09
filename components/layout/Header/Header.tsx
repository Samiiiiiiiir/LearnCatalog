'use client';

import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';
import { ButtonIcon, Logo } from '@/components';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { IMenuItem } from '@/types';
import { Sidebar } from '../Sidebar/Sidebar';

import { CloseIcon, BurgerIcon } from '@/assets';

import styles from './header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IMenuItem[][];
}

const sidebarVariants = {
  closed: {
    left: '-100%',
  },
  opened: {
    left: 0,
  },
};

export const Header = ({ data, className, ...props }: HeaderProps) => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const { alias } = useParams();

  useEffect(() => {
    if (alias) {
      setIsMenuClosed(false);
    }
  }, [alias]);

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Logo />
      <ButtonIcon
        onClick={() => setIsMenuClosed(true)}
        className={styles.burger}
        Icon={BurgerIcon}
        appearance="secondary"
        aria-label="Open mobile menu"
      />
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isMenuClosed ? 'opened' : 'closed'}
        className={styles.mobileMenu}
      >
        <Sidebar className={styles.mobileList} data={data} />
        <ButtonIcon
          onClick={() => setIsMenuClosed(false)}
          className={styles.close}
          appearance="secondary"
          Icon={CloseIcon}
          aria-label="Close mobile menu"
        />
      </motion.div>
    </header>
  );
};
