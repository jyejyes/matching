"use client";

import { PeopleCard } from "#/app/match/_components/PeopleCard";
import { useRouter } from "next/navigation";
import MatchTitle from "#/app/match/_components/MatchTitle";

import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { MatchingSuccessPopup } from "#/app/match/_components/MatchingSuccessPopup";
import { useGetAllFeed } from "#/hooks/apis/useGetAllFeed";
import { UnlikeButton } from "#/app/match/_components/UnlikeButton";
import { LikeButton } from "#/app/match/_components/LikeButton";
import Image from "next/image";
import useModalControl from "#/app/modalControl.state";
import { Loading } from "#/app/_components/Loading";
import { useTodayMatchingUsers } from "#/app/match/matching.state";

export default function Page() {
  const { push } = useRouter();

  const { isLoading } = useGetAllFeed();

  const { todayMatchingUsers } = useTodayMatchingUsers();

  const { isMatchingSuccessModalOpen } = useModalControl();

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-full p-4 relative">
      {isMatchingSuccessModalOpen && <MatchingSuccessPopup />}

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
              />
            </div>
          );
        })}
      </div>

      {
        // 남은 카드 있을 떄만 보여줌
        <div className="absolute z-20 w-full bottom-20 left-0 flex justify-center gap-10">
          <UnlikeButton status="match" />

          <LikeButton status="match" />
        </div>
      }

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
