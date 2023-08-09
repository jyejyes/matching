"use client";

import { LikeButton } from "#/app/match/_components/LikeButton";
import { UnlikeButton } from "#/app/match/_components/UnlikeButton";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";

export default function Buttons() {
  const { push } = useRouter();
  const handleClickUnlike = () => {
    //api 호출 후
    push(routerPaths.match());
    console.log("unlike");
  };

  const handleClickLike = () => {
    //api 호출 후
    push(routerPaths.match());
    console.log("like");
  };

  return (
    //   TODO: fixed로 변경해야함
    <div className="sticky bottom-0 p-8 w-full flex-center gap-10 bg-gradient-to-b from-transparent to-gray5/80">
      <UnlikeButton status="people" onClick={handleClickUnlike} />

      <LikeButton status="people" onClick={handleClickLike} />
    </div>
  );
}
