"use client";
import colors from "@/settings/ui/colors";
import ui from "@/settings/ui/ui";
import { motion, useScroll } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ScrollProgress = ({ children }: IProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: ui.progressBar ? scrollYProgress : 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: colors.PROGRESSBAR,
          transformOrigin: "0%",
          zIndex: 100,
          height: 5,
          borderBottom: `${colors.WHITE} 1px solid`,
        }}
      ></motion.div>
      {children}
    </>
  );
};

export default ScrollProgress;
