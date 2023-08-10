"use client";

import { UserInfo } from "#/app/people/[id]/_components/UserInfo";
import { UserImage } from "#/app/people/[id]/_components/UserImage";
import Buttons from "#/app/people/[id]/_components/Buttons";
import Image from "next/image";
import Link from "next/link";
import routerPaths from "#/utils/routerPaths";
import useModalControl from "#/app/modalControl.state";
import { MatchingToast } from "#/ui/components/Toast/MatchingToast";
import { useUserChoiceInfo } from "#/app/match/matching.state";

export default function Page() {
  const { isMatchingModalOpen } = useModalControl();
  const { userChoice } = useUserChoiceInfo();

  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      {isMatchingModalOpen && (
        <MatchingToast
          isLike={userChoice === "like"}
          className={
            "z-30 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
          }
        />
      )}
      <Link
        href={routerPaths.match()}
        className="rounded-full bg-white bg-opacity-60 absolute top-4 left-4 w-[45px] h-[45px] flex-center shadow-md"
      >
        <Image
          src={"/images/signup/ic-backward.svg"}
          alt={"back"}
          width={24}
          height={24}
        />
      </Link>

      <div>
        <UserImage />

        <UserInfo />
      </div>

      <Buttons />
    </div>
  );
}
