import clsx from 'clsx';

import styles from './input.module.scss';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={clsx(styles.input, className)} {...props} />;
};
