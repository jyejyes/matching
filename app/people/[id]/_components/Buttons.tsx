"use client";

import { LikeButton } from "#/app/match/_components/LikeButton";
import { UnlikeButton } from "#/app/match/_components/UnlikeButton";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import useModalControl from "#/app/modalControl.state";
import { MouseEventHandler } from "react";
import { useMatchingLike } from "#/hooks/apis/useMatchingLike";
import { useFeedUser, useUserChoiceInfo } from "#/app/match/matching.state";

export default function Buttons() {
  const { push } = useRouter();

  const { updateIsMatchingModalOpen, isMatchingSuccessModalOpen } =
    useModalControl();
  const { userInfo: userData } = useFeedUser();
  const { updateUserChoice } = useUserChoiceInfo();

  const { mutateAsync: selectedLike } = useMatchingLike();

  const handleClickButton = async (userChoice: "like" | "unlike") => {
    updateUserChoice(userChoice);

    const res = await selectedLike({
      toMemberId: userData.id,
      like: userChoice === "like",
    });

    if (res) {
      updateIsMatchingModalOpen(true);

      setTimeout(() => {
        updateIsMatchingModalOpen(false);

        if (!isMatchingSuccessModalOpen) push(routerPaths.match());
      }, 1000);
    }
  };

  return (
    //   TODO: fixed로 변경해야함
    <div className="sticky bottom-0 p-8 w-full flex-center gap-10 bg-gradient-to-b from-transparent to-gray5/80">
      <UnlikeButton
        status="people"
        onClick={() => handleClickButton("unlike")}
      />

      <LikeButton status="people" onClick={() => handleClickButton("like")} />
    </div>
  );
}
