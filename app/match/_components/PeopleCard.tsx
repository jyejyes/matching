"use client";

import clsx from "clsx";
import {
  animate,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Tag } from "#/ui/components/Tag";
import Image from "next/image";
import { convertToPosition } from "#/utils/convertToPosition";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import { useFeedUser, useTodayMatchingUsers } from "#/app/match/matching.state";

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
  const { push } = useRouter();

  const { mutateAsync: selectedLike } = useMatchingLike();

  const { updateUserInfo } = useFeedUser();

  const { todayMatchingUsers, deleteTodayMatchingUsers } =
    useTodayMatchingUsers();

  const cardX = useMotionValue(0);
  const rotate = useTransform(cardX, [-300, 0, 300], [-20, 0, 20]);

  const handleDragEnd = async (
    e: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    const { offset } = info;

    if (Math.abs(offset.x) > 100) {
      const swipeDirection = info.offset.x > 0 ? "right" : "left";

      //함수
      if (swipeDirection === "right") {
        await handleLike(user.id, true);
      } else if (swipeDirection === "left") {
        await handleLike(user.id, false);
      }
    }
  };

  const handleLike = async (userId: number, like: boolean) => {
    animate(cardX, like ? 500 : -500, {
      type: "spring",
      stiffness: 100,
    });

    const res = await selectedLike({
      toMemberId: userId,
      like,
    });

    if (res.code === 1201) {
      console.log(like ? "좋아요 성공!" : "다음 기회에 성공!");
      deleteTodayMatchingUsers(userId);
    }
  };

  const handleClickDetail = () => {
    updateUserInfo(user);

    push(routerPaths.people(user.id));
  };

  return (
    <motion.div
      animate={{
        rotateZ: rotateDegree,
      }}
      style={{
        x: cardX,
        rotate,
      }}
      drag={"x"}
      whileDrag={{ scale: 0.97 }}
      dragSnapToOrigin
      onDragEnd={handleDragEnd}
      className={clsx(
        "relative border-[1px] border-gray4 shadow-lg overflow-hidden z-10 bg-white cursor-pointer w-[95%] min-h-[300px] max-h-[430px] h-full rounded-[12px] p-5 flex flex-col",
        className
      )}
    >
      <img
        src={user?.imgUrl ?? ""}
        alt={user?.username ?? "정해지지 않음"}
        className="absolute left-0 top-0 w-full h-full"
      />

      <div className="z-10 w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <Tag type="job">
              {convertToPosition(user?.position ?? "정해지지 않음")}
            </Tag>

            <Image
              src={"/images/match/ic-warning.svg"}
              alt={"warning"}
              width={28}
              height={28}
              className={"cursor-pointer"}
              onClick={handleClickDetail}
            />
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
