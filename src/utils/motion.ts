import { Variants } from "framer-motion";

export const SlideFromLeft = (delay: number = 0): Variants => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        type: "spring",
        stiffness: 100,
      },
    },
  };
};

export const SlideFromRight = (delay: number = 0): Variants => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        type: "spring",
        stiffness: 100,
      },
    },
  };
};

export const SlideFromTop = (delay: number = 0): Variants => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type: "spring",
        stiffness: 100,
      },
    },
  };
};
