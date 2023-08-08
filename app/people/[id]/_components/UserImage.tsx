"use client";

import { useParams, useSearchParams } from "next/navigation";

export const UserImage = () => {
  const query = useSearchParams();

  const userData = JSON.parse(query.get("user") as string);

  return (
    <div>
      <img src={userData.imgUrl} alt={"dd"} className="w-full" />
    </div>
  );
};
