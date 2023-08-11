"use client";

import React from "react";
import { ChattingRoomPreview } from "#/app/chat/_components/ChattingRoomPreview";
import { BottomNavigator } from "#/app/_components/BottomNavigator";
import { useRouter } from "next/navigation";
import { useGetMessages } from "#/hooks/apis/useGetMessages";
import { Loading } from "#/app/_components/Loading";
import routerPaths from "#/utils/routerPaths";

export default function Page() {
  const { push } = useRouter();

  const { data: messageRes, isLoading } = useGetMessages();

  return (
    <div className="w-full h-full relative flex flex-col overflow-hidden">
      <h1 className="w-full flex text-[24px] font-bold mt-[10px] mb-[14px] p-4 pb-0">
        채팅
      </h1>

      {isLoading ? (
        <Loading />
      ) : messageRes?.messageRooms?.length === 0 ? (
        <div className="flex flex-col flex-grow overflow-y-auto p-4">
          생성된 방이 없습니다.
        </div>
      ) : (
        <div className="flex flex-col flex-grow overflow-y-auto">
          {messageRes.messageRooms.map((msg, i) => (
            <ChattingRoomPreview
              key={i}
              chatInfo={msg}
              isNew={msg.isNewMessageInRoom}
              onClick={() => push(routerPaths.chattingRoom(msg.id))}
            />
          ))}
        </div>
      )}

      <div className="w-full flex flex-shrink-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
