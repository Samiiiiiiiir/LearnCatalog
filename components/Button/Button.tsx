import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import styles from './button.module.scss';
import clsx from 'clsx';
import ArrowIcon from './arrow.svg';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'secondary';
  children: ReactNode;
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
