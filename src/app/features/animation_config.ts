import { Variants } from "framer-motion";

export const pageVariants: Variants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
