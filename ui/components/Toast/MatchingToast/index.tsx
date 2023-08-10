import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  isLike: boolean;
  className?: string;
};

export const MatchingToast = ({ isLike, className }: Props) => {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1, 1, 0],
          transition: {
            duration: 1,
            times: [0, 0.3, 0.7, 1],
          },
        }}
        className={clsx(
          "bg-white bg-opacity-80 p-[24px] flex items-center gap-[10px] rounded-[12px]",
          className
        )}
      >
        <Image
          src={
            isLike
              ? "/images/match/ic-thumbup.svg"
              : "/images/match/ic-close.svg"
          }
          alt={isLike ? "like" : "unlike"}
          width={28}
          height={28}
        />

        <p className="text-subtitle font-extrabold">
          {isLike ? "좋아요" : "다음 기회에"}
        </p>
      </motion.div>
    </>
  );
};
