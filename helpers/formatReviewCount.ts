export const formatReviewCount = (n: number): string => {
  return `${n} ${n === 1 ? 'review' : 'reviews'}`;
};
