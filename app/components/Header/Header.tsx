'use client';

import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';
import { ButtonIcon, Logo } from '@/components';

import BurgerIcon from './burger.svg';
import CloseIcon from '@/helpers/icons/close.svg';

import styles from './header.module.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { IMenuItem } from '@/types';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
  const path = usePathname();

  useEffect(() => {
    setIsMenuClosed(false);
  }, [path]);

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Logo />
      <ButtonIcon
        onClick={() => setIsMenuClosed(true)}
        className={styles.burger}
        Icon={BurgerIcon}
        appearance="secondary"
      />
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isMenuClosed ? 'opened' : 'closed'}
        className={styles.mobileMenu}
      >
        <Sidebar data={data} />
        <ButtonIcon
          onClick={() => setIsMenuClosed(false)}
          className={styles.close}
          appearance="secondary"
          Icon={CloseIcon}
        />
      </motion.div>
    </header>
  );
};
