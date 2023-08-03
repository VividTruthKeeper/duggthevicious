"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver, useMediaQuery } from "usehooks-ts";

interface IProps {
  title: string;
  description: string;
  standout: string;
}

const Offer = ({ description, standout, title }: IProps) => {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const breakpoints = {
    768: useMediaQuery("(max-width: 768px)"),
    640: useMediaQuery("(max-width: 640px)"),
  };
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: breakpoints["640"] ? "-50px" : "-200px",
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) setOpen(true);
  }, [entry]);
  return (
    <motion.div
      ref={ref}
      className="service-offer flex flex-col gap-2 py-4 px-8 relative border-2 border-solid border-[#423E51] rounded-2xl cursor-pointer"
      initial={{ padding: breakpoints["768"] ? "16px 20px" : "16px 24px" }}
      animate={
        open
          ? {
              padding: breakpoints["768"] ? "16px 24px" : "16px 32px",
              background: "#EFEDFA",
            }
          : {
              padding: breakpoints["768"] ? "16px 20px" : "16px 24px",
              background: "#FFFFFF",
            }
      }
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
            initial={{
              fontSize: breakpoints["640"]
                ? "22px"
                : breakpoints["768"]
                ? "26px"
                : "32px",
            }}
            animate={
              open
                ? {
                    fontSize: breakpoints["640"]
                      ? "22px"
                      : breakpoints["768"]
                      ? "26px"
                      : "32px",
                  }
                : {
                    fontSize: breakpoints["640"]
                      ? "18px"
                      : breakpoints["768"]
                      ? "21px"
                      : "24px",
                  }
            }
          >
            {title}
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
        <p className="text-DARKBLUE text-lg font-SATOSHI overflow-hidden max-md:text-base max-sm:text-sm">
          {description}
        </p>
        <motion.p
          className="text-DARKBLUE text-lg font-SATOSHI overflow-hidden font-bold max-md:text-base max-sm:text-sm"
          initial={{ height: "fit-content" }}
          animate={open ? { height: "fit-content" } : { height: "0px" }}
        >
          {standout}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Offer;
