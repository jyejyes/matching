"use client";
import React from "react";
import { motion } from "framer-motion";

const slideVariants1 = {
  start: { x: "0%" },
  end: {
    x: "-100%",
    transition: { duration: 20, ease: "linear", repeat: Infinity },
  },
};

const slideVariants2 = {
  start: { x: "-100%" },
  end: {
    x: "0%",
    transition: { duration: 20, ease: "linear", repeat: Infinity },
  },
};
export const InfiniteImages = () => {
  return (
    <div className="mb-[71px] flex flex-col gap-7">
      <div className="min-h-[120px] w-[1290px] flex gap-5 overflow-hidden">
        <motion.img
          src="/images/signup/img-main1@x2.png"
          alt="Infinite Slider"
          initial="start"
          animate="end"
          variants={slideVariants1}
          className="h-[120px]"
        />
        <motion.img
          src="/images/signup/img-main1@x2.png"
          alt="Infinite Slider"
          initial="start"
          animate="end"
          variants={slideVariants1}
          className="h-[120px]"
        />
      </div>

      <div className="min-h-[120px] w-[1290px] flex gap-5 overflow-hidden">
        <motion.img
          src="/images/signup/img-main2@x2.png"
          alt="Infinite Slider"
          initial="start"
          animate="end"
          variants={slideVariants2}
          className="h-[120px]"
        />
        <motion.img
          src="/images/signup/img-main2@x2.png"
          alt="Infinite Slider"
          initial="start"
          animate="end"
          variants={slideVariants2}
          className="h-[120px] w-[2580px]"
        />
      </div>
    </div>
  );
};
