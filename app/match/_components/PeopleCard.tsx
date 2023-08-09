"use client";

import clsx from "clsx";
import { motion, PanInfo } from "framer-motion";
import { useState } from "react";
import { Tag } from "#/ui/components/Tag";
import Image from "next/image";
import { convertToPosition } from "#/utils/convertToPosition";
import Link from "next/link";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";

type Props = {
  user: MatchingCoworkerInfo;
  rotateDegree: number;
  className?: string;
  imgBlur?: boolean;
  displayedCardIndex?: number;
};

export const PeopleCard = ({
  user,
  rotateDegree,
  className,
  displayedCardIndex,
}: Props) => {
  const [selectOption, setSelectOption] = useState<"like" | "dislike" | "none">(
    "none"
  );

  const { mutateAsync: selectedLike } = useMatchingLike();

  const handleDragEnd = async (
    e: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    const {
      offset: { x: moveDirection },
    } = info;

    if (moveDirection > 100) {
      setSelectOption("like");

      //좋아요 호출
      const res = await selectedLike({
        toMemberId: user.id,
        like: true,
      });

      if (res.code === 1000) {
      }
    } else if (moveDirection < -100) {
      setSelectOption("dislike");

      //다음에 호출
      const res = await selectedLike({
        toMemberId: user.id,
        like: false,
      });
    }
  };

  return (
    <motion.div
      animate={{
        x:
          selectOption === "like"
            ? "110%"
            : selectOption === "dislike"
            ? "-110%"
            : 0,
        rotateZ: rotateDegree,
      }}
      drag={"x"}
      whileDrag={{ scale: 0.97 }}
      onDragEnd={handleDragEnd}
      dragSnapToOrigin={selectOption === "none"}
      className={clsx(
        "relative overflow-hidden z-10 bg-white cursor-pointer w-[95%] min-h-[300px] max-h-[430px] h-full shadow-md rounded-[12px] p-5 flex flex-col",

        className
      )}
    >
      {displayedCardIndex === 2 && (
        <img
          src={user?.imgUrl ?? ""}
          alt={user?.username ?? "정해지지 않음"}
          className="absolute left-0 top-0 w-full h-full"
        />
      )}

      {displayedCardIndex === 1 && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray3 z-30" />
      )}

      {displayedCardIndex === 0 && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray2 z-30" />
      )}

      <div className="z-10 w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <Tag type="job">
              {convertToPosition(user?.position ?? "정해지지 않음")}
            </Tag>

            <Link
              href={{
                pathname: `/people/${user?.id}`,
              }}
            >
              <Image
                src={"/images/match/ic-warning.svg"}
                alt={"warning"}
                width={28}
                height={28}
                className={"cursor-pointer"}
              />
            </Link>
          </div>

          <h2 className="text-[30px] font-extrabold text-white">
            {user?.username ?? "정해지지 않음"}
          </h2>
        </div>

        <div>
          <p className="text-[14px] font-extrabold mb-3 text-white">
            보유 기술
          </p>

          <div className="flex flex-wrap gap-1">
            {user?.skill?.map((item, i) => (
              <Tag type="language" key={i}>
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
