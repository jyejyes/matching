"use client";

import clsx from "clsx";
import { motion, PanInfo } from "framer-motion";
import { useState } from "react";
import { Tag } from "#/ui/components/Tag";
import Image from "next/image";
import { convertToPosition } from "#/utils/convertToPosition";
import Link from "next/link";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";
import useMatchedUser from "#/app/match/matchedUser.state";

type Props = {
  className?: string;
};

export const PeopleCard = ({ className }: Props) => {
  const [selectOption, setSelectOption] = useState<"like" | "dislike" | "none">(
    "none"
  );

  const { userInfo: user } = useMatchedUser();

  const { mutate } = useMatchingLike();

  const handleDragEnd = (
    e: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    const {
      offset: { x: moveDirection },
    } = info;

    if (moveDirection > 100) {
      setSelectOption("like");

      //좋아요 호출
      mutate({
        toMemberId: user.id,
        like: true,
      });
    } else if (moveDirection < -100) {
      setSelectOption("dislike");

      //다음에 호출
      mutate({
        toMemberId: user.id,
        like: false,
      });
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
      // onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragSnapToOrigin={selectOption === "none"}
      className={clsx(
        "relative z-10 bg-white cursor-pointer w-[95%] h-[430px] shadow-md rounded-[12px] p-5 flex flex-col justify-between bg-center bg-no-repeat",

        className
      )}
    >
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between">
          <Tag type="job">{convertToPosition(user.position)}</Tag>

          <Link
            href={{
              pathname: `/people/${user.id}`,
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
