'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ButtonIcon } from '@/components';
import UpIcon from './up.svg';
import styles from './scrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 101) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ButtonIcon
      onClick={handleClick}
      appearance="primary"
      Icon={UpIcon}
      className={clsx(styles.button, {
        [styles.hidden]: !isScrolled,
      })}
      aria-label="Scroll to top"
    />
  );
};
