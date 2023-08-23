"use client";

import { PeopleCard } from "#/app/match/_components/PeopleCard";
import MatchTitle from "#/app/match/_components/MatchTitle";

import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { useGetAllFeed } from "#/hooks/apis/useGetAllFeed";
import { UnlikeButton } from "#/app/match/_components/UnlikeButton";
import { LikeButton } from "#/app/match/_components/LikeButton";
import Image from "next/image";
import useModalControl from "#/app/modalControl.state";
import { Loading } from "#/app/_components/Loading";
import {
  useTodayMatchingUsers,
  useUserChoiceInfo,
} from "#/app/match/matching.state";
import { MatchingToast } from "#/ui/components/Toast/MatchingToast";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";
import { useState } from "react";

export default function Page() {
  const { isLoading } = useGetAllFeed();

  const { todayMatchingUsers } = useTodayMatchingUsers();

  const { isMatchingModalOpen, isMatchingSuccessModalOpen } = useModalControl();

  const { userChoice, updateUserChoice } = useUserChoiceInfo();

  const { mutateAsync: selectedLike } = useMatchingLike();

  //animation
  const [triggerLike, setTriggerLike] = useState(0);

  const handleClickLikeOrUnlike = async (userChoice: "like" | "unlike") => {
    updateUserChoice(userChoice);

    setTriggerLike((prev) => prev + 1);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-full p-4 relative">
      {/*z-index: 30*/}
      {isMatchingModalOpen && (
        <MatchingToast
          isLike={userChoice === "like"}
          className={
            "z-30 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
          }
        />
      )}

      <MatchTitle numberOfPeople={todayMatchingUsers.length} />

      <div className="relative w-full h-[calc(100%-250px)] flex-center-col">
        <Image
          src={"/images/match/Img-ghost@x2.png"}
          alt={"ghost"}
          width={138}
          height={138}
        />

        <p className="mt-5 font-bold text-pointBlue2">
          오늘 자정이 지나면 다시 추천드릴게요!
        </p>
        {todayMatchingUsers.map((item, i) => {
          const lastIndex = todayMatchingUsers.length - 1;
          const rotateDegree = (lastIndex - i) * 1.5; // 반대로 회전

          return (
            <div key={i} className="w-full h-full absolute flex-center">
              <PeopleCard
                user={item}
                rotateDegree={rotateDegree}
                displayedCardIndex={i}
                triggerLike={triggerLike}
                currentUserIndex={todayMatchingUsers[lastIndex].id}
              />
            </div>
          );
        })}
      </div>

      {todayMatchingUsers.length > 0 && (
        <div className="absolute z-20 w-full bottom-20 left-0 flex justify-center gap-10">
          <UnlikeButton
            status="match"
            onClick={() => handleClickLikeOrUnlike("unlike")}
          />

          <LikeButton
            status="match"
            onClick={() => handleClickLikeOrUnlike("like")}
          />
        </div>
      )}

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
