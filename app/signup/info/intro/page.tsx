"use client";

import { SelectedTitle } from "#/app/signup/_components/SelectedTitle";
import { DefaultButton } from "#/ui/components/DefaultButton";
import Image from "next/image";
import routerPaths from "#/utils/routerPaths";
import { useRouter } from "next/navigation";
import useUserInfo from "#/app/signup/store/useUserInfo";
import SessionStorage from "#/utils/SessionStorage";

export default function Page() {
  const { push } = useRouter();

  const { intro, updateIntro } = useUserInfo();
  const handleClickBackButton = () => {
    push(routerPaths.selectedSkills());
  };

  const handleClickNextButton = () => {
    push(routerPaths.selectedProfile());

    SessionStorage.setItem("userSelectedIntro", JSON.stringify(intro));
  };
  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateIntro(e.target.value);
  };
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
        currentStep={3}
        totalSteps={5}
        title={["자기소개를 입력해주세요."]}
        subTitle={
          "자기 소개를 입력해주세요. 상대방에게 어필할 수 있도록, 더 좋은 팀을 만나기 위해 충실히 작성해주세요! :)"
        }
        className="mb-5"
      />

      <textarea
        className="w-full h-[207px] bg-gray1 border-none resize-none  rounded-[12px] p-5 text-gray9 text-[15px] leading-[23px] focus:ring-0"
        maxLength={500}
        value={intro}
        onChange={handleChangeIntro}
      />

      <div className="absolute bottom-0 w-full">
        <DefaultButton disabled={!intro} onClick={handleClickNextButton}>
          다음
        </DefaultButton>
      </div>
    </div>
  );
}
