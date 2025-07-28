import { stagger } from 'framer-motion';

export const thirdLevelVariants = {
  opened: {
    marginTop: '10px',
    transition: {
      delayChildren: stagger(0.03),
    },
  },
  closed: {
    marginTop: 0,
  },
};

export const thirdLevelVariantsChildren = {
  opened: {
    opacity: 1,
    marginBottom: 10,
    maxHeight: 44,
  },
  closed: {
    opacity: 0,
    marginBottom: 0,
    maxHeight: 0,
  },
};

export const secondLevelVariants = {
  opened: {
    transition: {
      delayChildren: stagger(0.03),
    },
  },
  closed: {},
};

export const secondLevelVariantsChildren = {
  opened: (dynamicHeight: number) => ({
    opacity: 1,
    maxHeight: dynamicHeight,
  }),
  closed: {
    opacity: 0,
    maxHeight: 0,
  },
};
