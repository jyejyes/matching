"use client";

import { POSITIONS } from "#/constant/signup.constant";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { MemberType } from "#/hooks/apis/useGetMember";
import { useEffect } from "react";
import useUserInfo, { UserInfoState } from "#/app/signup/store/useUserInfo";

export const UserSelectedPosition = (props: MemberType) => {
  const { interest, updateInterest, deleteInterest } = useUserInfo();

  useEffect(() => {
    props?.interest?.forEach((item) => {
      updateInterest(item);
    });
  }, [props.interest]);

  const handleClickInterest = (selectedInterest: UserInfoState["position"]) => {
    if (interest.includes(selectedInterest)) {
      deleteInterest(selectedInterest);
      return;
    }

    updateInterest(selectedInterest);
  };

  return (
    <div>
      <p className={"text-pointBlue2 font-bold mb-7"}>직군 리스트</p>

      <div className="flex flex-col gap-3 mb-[30px]">
        {props.interest &&
          POSITIONS.map((position, i) => (
            <SelectedButton
              key={i}
              size={"lg"}
              selected={interest.includes(position.dev)}
              disabled={false}
              onClick={() => handleClickInterest(position.dev)}
            >
              {position.user}
            </SelectedButton>
          ))}
      </div>
    </div>
  );
};
