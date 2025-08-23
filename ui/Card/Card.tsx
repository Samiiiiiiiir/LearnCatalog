import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  RefObject,
} from 'react';
import clsx from 'clsx';

import styles from './card.module.scss';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
  color?: 'white' | 'lightgrey';
}

export const Card = ({
  color,
  children,
  className,
  ref,
  ...props
}: PropsWithChildren<CardProps>) => {
  return (
    <div
      ref={ref}
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
