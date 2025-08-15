export const formatDate = (createdAt: string): string => {
  return new Date(createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
