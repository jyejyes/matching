"use client";

import styles from "./AutoProgress.module.css";
import { motion } from "framer-motion";

type Props = {
  sec: number;
};

export const AutoProgress = ({ sec }: Props) => {
  return (
    <div className={styles.root}>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: sec }}
        className={styles.progress}
      ></motion.div>
    </div>
  );
};
