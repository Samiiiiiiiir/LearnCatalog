import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './textarea.module.scss';

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={clsx(styles.textarea, className)} {...props} />;
};
