import { useRef, useState } from 'react';

export const useReviews = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToReviews = () => {
    if (reviewsRef.current && shouldScroll) {
      reviewsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      reviewsRef.current.focus();
    }
  };

  const handleReviewClick = () => {
    if (shouldScroll) {
      scrollToReviews();
    } else {
      setIsReviewsOpen(true);
      setShouldScroll(true);
    }
  };

  return {
    reviewsRef,
    isReviewsOpen,
    setIsReviewsOpen,
    shouldScroll,
    setShouldScroll,
    handleReviewClick,
    scrollToReviews,
  };
};
