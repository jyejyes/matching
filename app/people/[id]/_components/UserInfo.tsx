"use client";
import { HaveSkills } from "#/app/people/[id]/_components/HaveSkills";
import { Introduce } from "#/app/people/[id]/_components/Introduce";
import { Tag } from "#/ui/components/Tag";
import { useSearchParams } from "next/navigation";
import { convertToPosition } from "#/utils/convertToPosition";
import useMatchedUser from "#/app/match/matchedUser.state";

export const UserInfo = () => {
  const { userInfo: userData } = useMatchedUser();

  return (
    <div className="flex flex-col gap-6 p-4 pb-[10px]">
      <div className="flex flex-col gap-2">
        <Tag type="job">{convertToPosition(userData.position)}</Tag>

        <h2 className="text-[30px] font-extrabold text-gray9">
          {userData.username}
        </h2>
      </div>

      <HaveSkills skills={userData.skill ?? []} />

      <Introduce intro={userData.intro ?? ""} />
    </div>
  );
};
