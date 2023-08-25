"use client";

import { Header } from "#/app/setting/_components/Header";

import { DefaultButton } from "#/ui/components/DefaultButton";
import React from "react";
import { UserSelectedPosition } from "#/app/setting/matchingJob/_components/UserSelectedPosition";
import { useGetMember } from "#/hooks/apis/useGetMember";

export default function Page() {
  const { isLoading, data } = useGetMember();

  return (
    <div className={"w-full h-full flex flex-col items-center relative"}>
      <Header content={"매칭 직군 설정"} back={"/setting"} />

      <div className="p-4 w-full flex flex-col gap-7 overflow-y-auto pb-20">
        <UserSelectedPosition {...data} />
      </div>

      <div className={"absolute bottom-0 w-full p-4"}>
        <DefaultButton disabled={false}>저장하기</DefaultButton>
      </div>
    </div>
  );
}
