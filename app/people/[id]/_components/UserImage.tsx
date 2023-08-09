"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useFeedUser } from "#/app/match/matching.state";

export const UserImage = () => {
  const { userInfo: userData } = useFeedUser();

  return (
    <div>
      <img src={userData.imgUrl} alt={"dd"} className="w-full" />
    </div>
  );
};
