"use client";

import { Header } from "#/app/setting/_components/Header";
import { useGetMember } from "#/hooks/apis/useGetMember";
import { UserPosition } from "#/app/setting/intro/_components/UserPosition";
import React from "react";
import { DefaultButton } from "#/ui/components/DefaultButton";

export default function Page() {
  const { isLoading, data } = useGetMember();

  return (
    <div className={"w-full h-full flex flex-col items-center relative"}>
      <Header content={"내 소개 설정"} back={"/setting"} />

      <div className="p-4 w-full flex flex-col overflow-y-auto pb-20">
        <UserPosition {...data} />
      </div>

      <div className={"absolute bottom-0 w-full p-4"}>
        <DefaultButton disabled={false}>저장하기</DefaultButton>
      </div>
    </div>
  );
}
