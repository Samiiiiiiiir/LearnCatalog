'use client';

import clsx from 'clsx';
import { UpIcon } from '@/assets';
import { ButtonIcon } from '@/ui';

import { useScrollToTop } from './hooks/useScrollToTop';
import styles from './scrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const { isScrolled, scrollToTop } = useScrollToTop();

  return (
    <ButtonIcon
      onClick={scrollToTop}
      appearance="primary"
      Icon={UpIcon}
      className={clsx(styles.button, {
        [styles.hidden]: !isScrolled,
      })}
      aria-label="Scroll to top"
    />
  );
};
