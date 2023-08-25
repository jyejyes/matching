"use client";

import { MemberType } from "#/hooks/apis/useGetMember";
import { convertToPosition } from "#/utils/convertToPosition";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { useGetSkills } from "#/hooks/apis/useGetSkills";
import useUserInfo from "#/app/signup/store/useUserInfo";
import { useEffect } from "react";

export const UserPosition = (props: MemberType) => {
  const { isLoading, data: skills } = useGetSkills(props.position);

  const {
    skills: userSelectedSkills,
    deleteSkill,
    updateSkills,
    updateUsername,
    updateIntro,
  } = useUserInfo();

  //이름 변경 함수
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUsername(e.target.value);
  };

  const handleClickSkill = (skill: string) => {
    if (userSelectedSkills.includes(skill)) {
      deleteSkill(skill);
      return;
    }
    updateSkills(skill);
  };

  useEffect(() => {
    props?.skill?.forEach((item) => {
      updateSkills(item);
    });
  }, [props.skill]);

  if (isLoading) <div>loading...</div>;

  return (
    <div className="flex flex-col w-full gap-7">
      <div>
        <p className={"text-pointBlue2 font-bold mb-3"}>이름</p>

        <input
          defaultValue={props.username}
          onChange={(e) => updateUsername(e.target.value)}
          className="w-full bg-gray1 border-none resize-none rounded-[12px] p-4 text-gray9 text-[15px] leading-[23px] focus:ring-0"
        />
      </div>

      <div>
        <p className={"text-pointBlue2 font-bold mb-7"}>보유 기술</p>

        <div className="flex flex-wrap gap-[10px]">
          {skills &&
            skills.map((item, i) => (
              <SelectedButton
                key={i}
                disabled={false}
                selected={userSelectedSkills.includes(item)}
                size={"sm"}
                onClick={() => handleClickSkill(item)}
              >
                {item.replaceAll('"', "")}
              </SelectedButton>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <p className={"text-pointBlue2 font-bold"}>자기소개</p>

        <textarea
          className="w-full h-[207px] bg-gray1 border-none resize-none rounded-[12px] p-5 text-gray9 text-[15px] leading-[23px] focus:ring-0 placeholder-gray5"
          maxLength={500}
          defaultValue={props.intro}
          onChange={(e) => updateIntro(e.target.value)}
          placeholder={"자기소개 입력 (최대 500자)"}
        />
      </div>
    </div>
  );
};
