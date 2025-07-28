import { ButtonHTMLAttributes, DetailedHTMLProps, FC, SVGProps } from 'react';
import clsx from 'clsx';

import styles from './buttonIcon.module.scss';

interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'secondary';
  Icon: FC<SVGProps<SVGElement>>;
}

export const ButtonIcon = ({
  Icon,
  appearance,
  className,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        {
          [styles.primary]: appearance == 'primary',
          [styles.secondary]: appearance == 'secondary',
        },
        className,
      )}
      {...props}
    >
      <Icon />
    </button>
  );
};
