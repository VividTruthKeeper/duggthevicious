"use client";
import { ReactNode } from "react";
import { delay, motion } from "framer-motion";
import ui from "@/settings/ui/ui";
import { Animations } from "@/types/animation.types";
import animations from "@/animations";

interface IProps {
  children: ReactNode;
  type: Animations;
  margin?: string;
  delay?: string;
}

const AnimateInView = ({ children, type, margin = "-50%" }: IProps) => {
  return ui.scrollAnimations ? (
    <motion.div
      className="animated-box flex flex-col justify-center overflow-hidden w-full"
      initial={animations[type].initial as any}
      whileInView={{
        ...(animations[type].inView as any),
        animationDelay: delay,
      }}
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );
};

export default AnimateInView;
