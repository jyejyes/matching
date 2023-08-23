"use client";

import { MemberType } from "#/hooks/apis/useGetMember";
import { convertToPosition } from "#/utils/convertToPosition";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { useGetSkills } from "#/hooks/apis/useGetSkills";

export const UserPosition = (props: MemberType) => {
  const { isLoading, data: skills } = useGetSkills(props.position);

  if (isLoading) <div>loading...</div>;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <p className={"text-gray6 font-bold leading-6"}>
          {props.username}님의 직군
        </p>
        <p className="text-gray9 text-[20px] font-bold leading-7">
          {convertToPosition(props.position)}
        </p>
      </div>

      <div>
        <p className={"text-pointBlue2 font-bold mb-7"}>보유 기술</p>

        <div className="flex flex-wrap gap-[10px]">
          {skills &&
            skills.map((item, i) => (
              <SelectedButton
                key={i}
                disabled={false}
                selected={props.skill.includes(item)}
                size={"sm"}
              >
                {item.replaceAll('"', "")}
              </SelectedButton>
            ))}
        </div>
      </div>
    </div>
  );
};
