"use client";

import React from "react";
import { ChattingRoomPreview } from "#/app/chat/_components/ChattingRoomPreview";
import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { useRouter } from "next/navigation";
import { useGetMessages } from "#/hooks/apis/useGetMessages";
import { Loading } from "#/app/_components/Loading";

export default function Page() {
  const { push } = useRouter();

  const { data: messageRes, isLoading } = useGetMessages();

  return (
    <div className="w-full h-full p-4 relative">
      <h1 className="text-[24px] font-bold mt-[10px] mb-[14px]">채팅</h1>

      {isLoading ? (
        <Loading />
      ) : messageRes?.messageRooms?.length === 0 ? (
        <div>생성된 방이 없습니다.</div>
      ) : (
        <div className="flex flex-col gap-[10px]">
          {messageRes.messageRooms.map((msg, i) => (
            <ChattingRoomPreview
              key={i}
              chatInfo={msg}
              isNew={msg.isNewMessageInRoom}
              onClick={() => push(`chat/${msg.id}`)}
            />
          ))}
        </div>
      )}

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
