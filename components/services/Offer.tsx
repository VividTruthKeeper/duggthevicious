"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface IProps {
  initiallyOpen?: boolean;
}

const Offer = ({ initiallyOpen }: IProps) => {
  const [open, setOpen] = useState<boolean | undefined>(initiallyOpen);
  return (
    <motion.div
      className="service-offer flex flex-col gap-2 py-4 px-8 relative border-2 border-solid border-[#423E51] rounded-2xl cursor-pointer"
      initial={{ padding: "16px 24px" }}
      animate={open ? { padding: "16px 32px" } : { padding: "16px 24px" }}
      onClick={() => setOpen(!open)}
    >
      <motion.div
        className="overflow-hidden"
        initial={{ height: "60px" }}
        animate={open ? { height: "60px" } : { height: "0px" }}
      >
        <Image
          src="/globe.svg"
          alt="offer"
          width={60}
          height={60}
          className="object-contain w-[60px] h-full"
        />
      </motion.div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-[10px] justify-between">
          <motion.h3
            className="text-[36px] text-DARKBLUE font-SATOSHI font-bold"
            initial={{ fontSize: "36px" }}
            animate={open ? { fontSize: "36px" } : { fontSize: "24px" }}
          >
            Offer One
          </motion.h3>
          <motion.div
            className="overflow-hidden"
            initial={{ height: "36px" }}
            animate={!open ? { height: "36px" } : { height: "0px" }}
          >
            <Image
              src="/globe.svg"
              alt="offer"
              width={36}
              height={36}
              className="object-contain w-[36px] h-full"
            />
          </motion.div>
        </div>
        <p className="text-DARKBLUE text-lg font-SATOSHI overflow-hidden">
          Put your main offer here. Outline benefits and features any potential
          clients need to know.
        </p>
        <motion.p
          className="text-DARKBLUE text-lg font-SATOSHI overflow-hidden font-bold"
          initial={{ height: "20px" }}
          animate={open ? { height: "24px" } : { height: "0px" }}
        >
          Put a stand out benefit here.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Offer;
