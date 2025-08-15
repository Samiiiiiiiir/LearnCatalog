'use client';

import { DetailedHTMLProps, HTMLAttributes, KeyboardEvent, Ref } from 'react';
import clsx from 'clsx';
import { StarIcon } from '@/assets';

import styles from './rating.module.scss';
import { useRating } from '@/hooks';

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  initialRating?: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}

export const Rating = ({
  isEditable = false,
  initialRating = 0,
  setRating,
  className,
  ref,
  ...props
}: RatingProps) => {
  const {
    showedRating,
    ratingArray,
    calcTabindex,
    changeRatingByKeyboard,
    handleClick,
    handleHover,
    handleMouseLeave,
  } = useRating({ initialRating, isEditable, setRating });

  return (
    <div
      ref={ref}
      onMouseLeave={handleMouseLeave}
      className={clsx(styles.wrapper, isEditable && styles.editable, className)}
      title={initialRating ? `Rating: ${initialRating.toFixed(1)}` : ''}
      role={isEditable ? 'slider' : undefined}
      aria-valuenow={isEditable ? initialRating : undefined}
      aria-valuemax={isEditable ? 5 : undefined}
      aria-valuemin={isEditable ? 1 : undefined}
      {...props}
    >
      {new Array(5).fill(null).map((_, i) => (
        <span
          key={i}
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => handleHover(i + 1)}
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
            changeRatingByKeyboard(e)
          }
          tabIndex={calcTabindex(i)}
          ref={(r) => {
            ratingArray.current[i] = r;
          }}
        >
          <StarIcon className={clsx(i + 1 <= showedRating && styles.filled)} />
        </span>
      ))}
    </div>
  );
};
