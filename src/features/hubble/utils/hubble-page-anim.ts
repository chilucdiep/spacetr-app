export const headerHello = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const headerTitle = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export const headerCaption = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

export const messageBox = {
  hidden: { x: 120, y: 120, scale: 0.3, opacity: 0 },
  show: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
};
