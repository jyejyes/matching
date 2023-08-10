"use client";

import { useRouter } from "next/navigation";
import useUserInfo from "#/app/signup/store/useUserInfo";
import routerPaths from "#/utils/routerPaths";
import Image from "next/image";
import { SelectedTitle } from "#/app/signup/_components/SelectedTitle";
import { DefaultButton } from "#/ui/components/DefaultButton";
import KakaoProfile from "#/app/signup/info/profile/_components/KakaoProfile";
import SelectAvatar from "#/app/signup/info/profile/_components/SelectAvatar";
import SessionStorage from "#/utils/SessionStorage";

export default function Page() {
  const { push } = useRouter();

  const { imgUrl, updateImgUrl } = useUserInfo();

  const handleClickBackButton = () => {
    push(routerPaths.selectedIntro());
  };

  const handleClickNextButton = () => {
    push(routerPaths.selectedWantedPosition());

    SessionStorage.setItem("userSelectedImgUrl", JSON.stringify(imgUrl));
  };

  return (
    <div className="relative h-full flex flex-col">
      <Image
        src={"/images/signup/ic-backward.svg"}
        alt={"뒤로가기"}
        width={24}
        height={24}
        className="mb-[30px] cursor-pointer"
        onClick={handleClickBackButton}
      />

      <SelectedTitle
        currentStep={4}
        totalSteps={5}
        title={["프로필 사진 등록 혹은", "아바타를 선택해주세요."]}
        subTitle="상대방과 만날 내 모습을 설정해주세요. :) 프로필 사진 등록 혹은 아바타를 1개 선택해주세요."
        className="mb-5"
      />

      <div className="flex flex-col gap-7 flex-grow overflow-y-auto">
        <KakaoProfile />

        <SelectAvatar />
      </div>

      <div className="w-full">
        <DefaultButton disabled={false} onClick={handleClickNextButton}>
          다음
        </DefaultButton>
      </div>
    </div>
  );
}
