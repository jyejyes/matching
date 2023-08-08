"use client";

import clsx from "clsx";
import { motion, PanInfo } from "framer-motion";
import { useState } from "react";
import { Tag } from "#/ui/components/Tag";
import Image from "next/image";
import { convertToPosition } from "#/utils/convertToPosition";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";
import Link from "next/link";

type Props = {
  user: MatchingCoworkerInfo;
  className?: string;
};

export const PeopleCard = ({ user, className }: Props) => {
  const [selectOption, setSelectOption] = useState<"like" | "dislike" | "none">(
    "none"
  );

  const handleDragStart = (
    e: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    const {
      offset: { x: moveDirection },
    } = info;

    if (moveDirection > 0) {
    }
  };

  const handleDragEnd = (
    e: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    const {
      offset: { x: moveDirection },
    } = info;

    if (moveDirection > 100) {
      setSelectOption("like");
    } else if (moveDirection < -100) {
      setSelectOption("dislike");
    }
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${user.imgUrl})`,
      }}
      animate={{
        x:
          selectOption === "like"
            ? "110%"
            : selectOption === "dislike"
            ? "-110%"
            : 0,
      }}
      drag={"x"}
      whileDrag={{ scale: 0.97 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragSnapToOrigin={selectOption === "none"}
      className={clsx(
        "z-10 bg-white cursor-pointer w-[95%] h-[430px] shadow-md rounded-[12px] p-5 flex flex-col justify-between bg-center bg-no-repeat",

        className
      )}
    >
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between">
          <Tag type="job">{convertToPosition(user.position)}</Tag>

          <Link
            href={{
              pathname: `/people/${user.id}`,
              query: {
                imgUrl: user.imgUrl,
                user: JSON.stringify(user),
              },
            }}
            // as={`/people/${user.id}`}
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
          {user.username}
        </h2>
      </div>

      <div>
        <p className="text-[14px] font-extrabold mb-3 text-white">보유 기술</p>

        <div className="flex flex-wrap gap-1">
          {user.skill.map((item, i) => (
            <Tag type="language" key={i}>
              {item}
            </Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
