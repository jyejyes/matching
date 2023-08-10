import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  message: string;
};

const Toast = ({ message }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={
        "w-full text-center py-4 bg-gray-900 text-white rounded-md shadow-md text-[14px]"
      }
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default Toast;
