"use client";

import { useRouter } from "next/navigation";
import useUserInfo from "#/app/signup/store/useUserInfo";
import { SelectedTitle } from "#/app/signup/_components/SelectedTitle";
import { convertToPosition } from "#/utils/convertToPosition";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { DefaultButton } from "#/ui/components/DefaultButton";
import Image from "next/image";
import routerPaths from "#/utils/routerPaths";
import { useGetSkills } from "#/hooks/apis/useGetSkills";
import SessionStorage from "#/utils/SessionStorage";

async function getSkills() {}
export default function Page() {
  const { push } = useRouter();

  const {
    position,
    skills: userSelectedSkills,
    updateSkills,
    deleteSkill,
  } = useUserInfo();

  const { isLoading, data: skills } = useGetSkills(position);

  //이전 버튼 클릭 함수
  const handleClickBackButton = () => {
    push(routerPaths.selectedPosition());
  };

  //다음 버튼 클릭 함수
  const handleClickNextButton = () => {
    push(routerPaths.selectedIntro());

    SessionStorage.setItem(
      "userSelectedSkills",
      JSON.stringify(userSelectedSkills)
    );
  };

  //스킬 선택 함수
  const handleClickSkill = (skill: string) => {
    if (userSelectedSkills.includes(skill)) {
      deleteSkill(skill);
      return;
    }
    updateSkills(skill);
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="relative h-full">
      <Image
        src={"/images/signup/ic-backward.svg"}
        alt={"뒤로가기"}
        width={24}
        height={24}
        className="mb-[30px] cursor-pointer"
        onClick={handleClickBackButton}
      />

      <SelectedTitle
        currentStep={2}
        totalSteps={5}
        title={[
          `${convertToPosition(position)} 직군이시군요!`,
          "현재 보유 기술을 입력해주세요.",
        ]}
        subTitle="보유하고 계신 대표적 기술을 선택해주세요. 내 매칭 프로필에 표시됩니다! 보유한 스킬이 없다면 자기소개란에 작성해주셔도 좋습니다!"
        className="mb-5"
      />

      <div className="flex flex-wrap gap-[10px]">
        {skills &&
          skills.map((skill: string, i: number) => (
            <SelectedButton
              key={i}
              disabled={false}
              selected={userSelectedSkills.includes(skill)}
              size={"sm"}
              onClick={() => handleClickSkill(skill)}
            >
              {skill}
            </SelectedButton>
          ))}
      </div>

      <div className="absolute bottom-0 w-full">
        <DefaultButton
          disabled={!userSelectedSkills.length}
          onClick={handleClickNextButton}
        >
          다음
        </DefaultButton>
      </div>
    </div>
  );
}
