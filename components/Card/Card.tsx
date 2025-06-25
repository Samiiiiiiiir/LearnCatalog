import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './card.module.scss';
import clsx from 'clsx';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'lightgrey';
}

export const Card = ({
  children,
  className,
  color,
  ...props
}: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={clsx(
        styles.card,
        {
          [styles.lightgrey]: color === 'lightgrey',
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
