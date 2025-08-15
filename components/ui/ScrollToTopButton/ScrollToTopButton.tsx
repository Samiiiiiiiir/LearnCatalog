'use client';

import clsx from 'clsx';
import { ButtonIcon } from '@/components';
import { UpIcon } from '@/assets';

import styles from './scrollToTopButton.module.scss';
import { useScrollToTop } from '@/hooks';

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
