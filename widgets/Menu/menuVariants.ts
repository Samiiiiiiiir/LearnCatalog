import { stagger } from 'framer-motion';

export const secondLevelVariants = {
  opened: {
    transition: {
      delayChildren: stagger(0.03),
    },
    marginTop: '12px',
    paddingTop: '6px',
  },
  closed: { marginTop: 0, paddingTop: 0 },
};

export const secondLevelVariantsChildren = {
  opened: (dynamicHeight: number) => ({
    opacity: 1,
    maxHeight: dynamicHeight,
    marginBottom: '10px',
  }),
  closed: {
    opacity: 0,
    maxHeight: 0,
    marginBottom: '0px',
  },
};

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
