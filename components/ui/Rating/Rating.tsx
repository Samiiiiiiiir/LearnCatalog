'use client';

import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { StarIcon } from '@/assets';

import styles from './rating.module.scss';

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
  const [showedRating, setShowedRating] = useState(initialRating);

  const ratingArray = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    setShowedRating(initialRating);
  }, [initialRating]);

  const handleClick = (n: number) => {
    if (isEditable && setRating) {
      setRating(n);
    }
  };

  const handleHover = (n: number) => {
    if (isEditable) {
      setShowedRating(n);
    }
  };

  const handleMouseLeave = () => {
    if (isEditable) {
      setShowedRating(initialRating);
    }
  };

  const changeRatingByKeyboard = (e: KeyboardEvent<HTMLDivElement>) => {
    if (
      e.code == 'ArrowUp' ||
      e.code == 'ArrowRight' ||
      e.code == 'ArrowDown' ||
      e.code == 'ArrowLeft'
    ) {
      e.preventDefault();
    }

    if (
      (e.code == 'ArrowUp' || e.code == 'ArrowRight') &&
      initialRating < 5 &&
      setRating &&
      isEditable
    ) {
      setRating(initialRating + 1);
      ratingArray.current[initialRating]?.focus();
    }

    if (
      (e.code == 'ArrowDown' || e.code == 'ArrowLeft') &&
      initialRating > 0 &&
      setRating &&
      isEditable
    ) {
      setRating(initialRating - 1);
      ratingArray.current[initialRating - 2]?.focus();
    }
  };

  const calcTabindex = (i: number): number => {
    if (!isEditable) return -1;

    if ((i == 0 && initialRating == 0) || i == initialRating - 1) {
      return 0;
    }

    return -1;
  };

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
