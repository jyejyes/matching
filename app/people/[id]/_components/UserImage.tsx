"use client";

import { useParams, useSearchParams } from "next/navigation";
import useMatchedUser from "#/app/match/matchedUser.state";

export const UserImage = () => {
  const { userInfo: userData } = useMatchedUser();

  return (
    <div>
      <img src={userData.imgUrl} alt={"dd"} className="w-full" />
    </div>
  );
};
