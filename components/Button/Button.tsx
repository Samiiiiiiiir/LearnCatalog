import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

import ArrowIcon from './arrow.svg';

import styles from './button.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance?: 'primary' | 'secondary';
  arrow?: 'right' | 'down' | 'none';
}

export const Button = ({
  appearance = 'primary',
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        appearance == 'primary' ? styles.primary : styles.secondary,
        arrow != 'none' && styles['with-arrow'],
      )}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <ArrowIcon
          className={clsx(styles.arrow, arrow == 'down' && styles.down)}
        />
      )}
    </button>
  );
};
