"use client";

import { SelectedTitle } from "#/app/signup/_components/SelectedTitle";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { DefaultButton } from "#/ui/components/DefaultButton";
import useUserInfo, { UserInfoState } from "#/app/signup/store/useUserInfo";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import { POSITIONS } from "#/constant/signup.constant";
import SessionStorage from "#/utils/SessionStorage";

export default function Page() {
  const { push } = useRouter();
  //zustand state
  const { position: userSelectedPosition, updatePosition } = useUserInfo();

  const handleClickPosition = (selectedPosition: UserInfoState["position"]) => {
    updatePosition(selectedPosition);
  };

  const handleClickNextButton = () => {
    push(routerPaths.selectedSkills());

    SessionStorage.setItem("userSelectedPosition", userSelectedPosition);
  };

  console.log(userSelectedPosition);
  return (
    <div className="relative h-full">
      <SelectedTitle
        currentStep={1}
        totalSteps={5}
        title={["반가워요.", "현재 어떤 직군에 종사하시나요?"]}
        className="mb-5"
      />

      <div className="flex flex-col gap-3 mb-[30px]">
        {POSITIONS.map((position, i) => (
          <SelectedButton
            key={i}
            size={"lg"}
            selected={position.dev === userSelectedPosition}
            disabled={false}
            onClick={() => handleClickPosition(position.dev)}
          >
            {position.user}
          </SelectedButton>
        ))}
      </div>

      <div className="w-full">
        <p className="text-gray6 text-center text-[14px]">
          프론트엔드, 백엔드 개발 둘 다 해당될 경우
          <br /> 본인에게 가까운 직무를 1개만 선택해주세요.
        </p>
      </div>

      <div className="absolute bottom-0 w-full">
        <DefaultButton
          disabled={!userSelectedPosition}
          onClick={handleClickNextButton}
        >
          다음
        </DefaultButton>
      </div>
    </div>
  );
}
