export const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
};

export const listItemVariant = {
  hidden: { y: 250, opacity: 0 },
  show: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

export const textVariant = {
  hidden: { y: 20, x: 10, opacity: 0 },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
