import { KeyboardEvent, useEffect, useRef, useState } from 'react';

export const useRating = ({
  initialRating,
  setRating,
  isEditable,
}: {
  initialRating: number;
  isEditable: boolean;
  setRating?: (rating: number) => void;
}) => {
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

  return {
    showedRating,
    setShowedRating,
    ratingArray,
    handleClick,
    handleHover,
    handleMouseLeave,
    changeRatingByKeyboard,
    calcTabindex,
  };
};
