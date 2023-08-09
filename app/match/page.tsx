"use client";

import { PeopleCard } from "#/app/match/_components/PeopleCard";
import { useRouter } from "next/navigation";
import MatchTitle from "#/app/match/_components/MatchTitle";
import { useGetFeed } from "#/hooks/apis/useGetFeed";

import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { MatchingSuccessPopup } from "#/app/match/_components/MatchingSuccessPopup";
import { useGetAllFeed } from "#/hooks/apis/useGetAllFeed";
import { UnlikeButton } from "#/app/match/_components/UnlikeButton";
import { LikeButton } from "#/app/match/_components/LikeButton";
import Image from "next/image";
import useModalControl from "#/app/modalControl.state";

const dummy = [
  {
    registrationSource: "1",
    id: 1,
    imgUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    interest: ["1", "2", "3"],
    intro: "1",
    position: "BACK_END",
    skill: ["1", "2"],
    userProviderId: "1",
    username: "1",
  },
  {
    registrationSource: "2",
    id: 2,
    imgUrl: "https://i.pravatar.cc/150?u=fake@pravatar",
    interest: ["1"],
    intro: "2",
    position: "BACK_END",
    skill: ["1"],
    userProviderId: "2",
    username: "2",
  },
  {
    registrationSource: "3",
    id: 3,
    imgUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    interest: ["1"],
    intro: "3",
    position: "FRONT_END",
    skill: ["1"],
    userProviderId: "3",
    username: "3",
  },
  {
    registrationSource: "4",
    id: 4,
    imgUrl: "https://i.pravatar.cc/150?u=fake@pravatar",
    interest: ["1"],
    intro: "4",
    position: "FRONT_END",
    skill: ["1"],
    userProviderId: "4",
    username: "4",
  },
  {
    registrationSource: "5",
    id: 5,
    imgUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    interest: ["1"],
    intro: "5",
    position: "BACK_END",
    skill: ["1"],
    userProviderId: "5",
    username: "5",
  },
];

export default function Page() {
  const { push } = useRouter();

  const { data: todayUsers, isLoading } = useGetAllFeed();

  const { isMatchingSuccessModalOpen } = useModalControl();

  const handleClickCard = () => {};

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="w-full h-full p-4 relative">
      {isMatchingSuccessModalOpen && <MatchingSuccessPopup />}

      <MatchTitle />

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
        {todayUsers.slice(0, 3).map((item, i) => {
          const lastIndex = dummy.slice(0, 3).length - 1;
          const rotateDegree = (lastIndex - i) * 3; // 반대로 회전

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
