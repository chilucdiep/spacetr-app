export const rocketVariant = {
  hidden: { y: 10, x: -10, opacity: 0 },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
  },
};

export const circleVariant = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
