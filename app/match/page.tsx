"use client";

import { PeopleCard } from "#/app/match/_components/PeopleCard";
import { useRouter } from "next/navigation";
import MatchTitle from "#/app/match/_components/MatchTitle";
import { useGetFeed } from "#/hooks/apis/useGetFeed";

import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { FakeCard } from "#/app/match/_components/FakeCard";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";

export default function Page() {
  const { push } = useRouter();

  const { isLoading, data: userCardData } = useGetFeed();

  const handleClickCard = () => {};

  //
  const { mutate } = useMatchingLike();

  const test = () => {
    mutate({
      toMemberId: 1,
      like: true,
    });
  };
  //

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="w-full h-full p-4 relative">
      {/*<MatchingSuccessPopup />*/}
      <button onClick={test}>ddd</button>

      <MatchTitle />

      <div className="relative w-full flex flex-col items-center">
        <PeopleCard user={userCardData} className={`absolute`} />

        <FakeCard bgColor={"gray1"} rotate={"6"} />
        <FakeCard bgColor={"gray3"} rotate={"3"} />
      </div>

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
