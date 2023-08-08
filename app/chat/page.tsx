"use client";

import React from "react";
import { ChattingRoomPreview } from "#/app/chat/_components/ChattingRoomPreview";
import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();

  return (
    <div className="w-full h-full p-4 relative">
      <h1 className="text-[24px] font-bold mt-[10px] mb-[14px]">채팅</h1>

      <div className="flex flex-col gap-[10px]">
        <ChattingRoomPreview isNew={true} onClick={() => push("/chat/1")} />
        <ChattingRoomPreview isNew={false} onClick={() => push("/chat/1")} />
        <ChattingRoomPreview isNew={false} onClick={() => push("/chat/1")} />
      </div>

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
