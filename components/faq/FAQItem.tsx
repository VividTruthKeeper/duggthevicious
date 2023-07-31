"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQItem = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="faq-item flex flex-col cursor-pointer py-5"
      onClick={() => setOpen(!open)}
    >
      <motion.div
        className="flex items-center"
        initial={{ gap: "24px" }}
        animate={open ? { gap: "16px" } : { gap: "24px" }}
      >
        <motion.div
          initial={{ rotateX: "0deg" }}
          animate={open ? { rotate: "45deg" } : { rotate: "0deg" }}
        >
          <Image
            src="/plus.svg"
            alt="plus"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
        </motion.div>
        <h4 className="text-xl font-bold font-INTER">What is Framer?</h4>
      </motion.div>
      <motion.p
        className="font-INTER text-base text-DARKBLUE overflow-hidden"
        initial={{ height: "0px" }}
        animate={
          open
            ? { height: "24px", marginTop: "32px", opacity: "100%" }
            : { height: "0px", marginTop: "0px", opacity: "0%" }
        }
      >
        Est magna officia pariatur eu fugiat exercitation quis sit et dolore
        velit adipisicing mollit.
      </motion.p>
    </div>
  );
};

export default FAQItem;
