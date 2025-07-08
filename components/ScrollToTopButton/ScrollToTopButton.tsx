'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components';

import ArrowIcon from './arrow.svg';

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
    <Button
      onClick={handleClick}
      appearance="primary"
      className={clsx(styles.button, {
        [styles.hidden]: !isScrolled,
      })}
    >
      <ArrowIcon />
    </Button>
  );
};
