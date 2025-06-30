export const formatReviewCount = (n: number) => {
  return `${n} ${n === 1 ? 'review' : 'reviews'}`;
};
