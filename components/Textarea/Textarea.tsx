import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import styles from './textarea.module.scss';
import clsx from 'clsx';

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={clsx(styles.textarea, className)} {...props} />;
};
