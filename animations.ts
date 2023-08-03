import { Variants } from "framer-motion";
import { Animations } from "./types/animation.types";

const animations: Record<Animations, Variants> = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  },
  toTop: {
    initial: {
      y: "60px",
    },
    inView: {
      y: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toBottom: {
    initial: {
      y: "-60px",
    },
    inView: {
      y: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toLeft: {
    initial: {
      x: "-60px",
    },
    inView: {
      x: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toRight: {
    initial: {
      x: "60px",
    },
    inView: {
      x: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toTopOpacity: {
    initial: {
      opacity: 0,
      y: "60px",
    },
    inView: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toBottomOpacity: {
    initial: {
      opacity: 0,
      y: "-60px",
    },
    inView: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toLeftOpacity: {
    initial: {
      opacity: 0,
      x: "60px",
    },
    inView: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
  toRightOpacity: {
    initial: {
      opacity: 0,
      x: "-60px",
    },
    inView: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.6,
      },
    },
  },
};

export default animations;
