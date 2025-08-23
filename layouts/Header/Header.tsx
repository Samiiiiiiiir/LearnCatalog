'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IMenuItem } from '@/types';
import { Sidebar } from '../Sidebar/Sidebar';
import { ButtonIcon, Logo } from '@/ui';

import { CloseIcon, BurgerIcon } from '@/assets';
import { useMobileMenu } from './hooks/useMobileMenu';
import { sidebarVariants } from './sidebarVariants';

import styles from './header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IMenuItem[][];
}

export const Header = ({ data, className, ...props }: HeaderProps) => {
  const { isMenuOpened, setisMenuOpened } = useMobileMenu();

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Logo />
      <ButtonIcon
        onClick={() => setisMenuOpened(true)}
        className={styles.burger}
        Icon={BurgerIcon}
        appearance="secondary"
        aria-label="Open mobile menu"
      />
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isMenuOpened ? 'opened' : 'closed'}
        className={styles.mobileMenu}
      >
        <Sidebar
          setisMenuOpened={setisMenuOpened}
          className={styles.mobileList}
          data={data}
        />
        <ButtonIcon
          onClick={() => setisMenuOpened(false)}
          className={styles.close}
          appearance="secondary"
          Icon={CloseIcon}
          aria-label="Close mobile menu"
        />
      </motion.div>
    </header>
  );
};
