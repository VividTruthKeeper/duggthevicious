"use client";

import { FAQ } from "./FAQ";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQItem = ({ name, description }: FAQ) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="faq-item flex flex-col cursor-pointer py-5" onClick={() => setOpen(!open)}>
      <motion.div
        className="grid grid-cols-FAQ items-center max-sm:grid-cols-FAQ_SM"
        initial={{ gap: "24px" }}
        animate={open ? { gap: "16px" } : { gap: "24px" }}
      >
        <motion.div initial={{ rotateX: "0deg" }} animate={open ? { rotate: "45deg" } : { rotate: "0deg" }}>
          <Image
            src="/plus.svg"
            alt="plus"
            width={16}
            height={16}
            className="w-4 h-4 object-contain max-sm:w-3 max-sm:h-3"
          />
        </motion.div>
        <h4 className="text-xl font-bold font-INTER max-sm:text-base">{name}</h4>
      </motion.div>
      <motion.p
        className="font-INTER text-base text-DARKBLUE overflow-hidden max-sm:text-sm"
        initial={{ height: "0px" }}
        animate={
          open
            ? { height: "fit-content", marginTop: "32px", opacity: "100%" }
            : { height: "0px", marginTop: "0px", opacity: "0%" }
        }
      >
        {description}
      </motion.p>
    </div>
  );
};

export default FAQItem;
