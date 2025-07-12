'use client';

import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  Ref,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';

import StarIcon from './star.svg';

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

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>, n: number) => {
    if (isEditable && setRating && (e.code === 'Space' || e.code === 'Enter')) {
      setRating(n);
    }
  };

  const changeRatingByKeyboard = (e: KeyboardEvent<HTMLDivElement>) => {
    if (
      (e.code == 'ArrowUp' || e.code == 'ArrowRight') &&
      initialRating < 5 &&
      setRating &&
      isEditable
    ) {
      e.preventDefault();
      setRating(initialRating + 1);
    }

    if (
      (e.code == 'ArrowDown' || e.code == 'ArrowLeft') &&
      initialRating > 0 &&
      setRating &&
      isEditable
    ) {
      e.preventDefault();
      setRating(initialRating - 1);
    }
  };

  return (
    <div
      tabIndex={isEditable ? 0 : -1}
      ref={ref}
      onMouseLeave={handleMouseLeave}
      className={clsx(styles.wrapper, isEditable && styles.editable, className)}
      title={initialRating ? `Rating: ${initialRating}` : ''}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
        changeRatingByKeyboard(e)
      }
      {...props}
    >
      {new Array(5).fill(null).map((_, i) => (
        <span
          key={i}
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => handleHover(i + 1)}
          onKeyDown={(e) => handleKeyDown(e, i + 1)}
        >
          <StarIcon className={clsx(i + 1 <= showedRating && styles.filled)} />
        </span>
      ))}
    </div>
  );
};
