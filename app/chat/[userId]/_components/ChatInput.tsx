"use client";

import { ArrowUp } from "#/app/chat/[userId]/_components/ArrowUp";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSendMessage } from "#/hooks/apis/useSendMessage";
import { UseMutateFunction } from "@tanstack/react-query";
import { useGetMessageRoom } from "#/hooks/apis/useGetMessageRoom";

export default function ChatInput() {
  const [userMessage, setUserMessage] = useState("");

  const messageRoomId = Number(usePathname().split("/")[2]);

  const { mutateAsync: sendMessage, isSuccess } = useSendMessage();

  const { refetch } = useGetMessageRoom(messageRoomId);

  const handleClickSend = async () => {
    try {
      const result = await sendMessage({
        messageRoomId,
        content: userMessage,
      });

      if (result.code === 1000) {
        setUserMessage("");
        refetch();

        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-white w-full h-[58px] flex flex-shrink-0 items-center justify-between px-5 pb-1">
      <input
        type="text"
        className="placeholder-gray5 border-none p-0 w-[90%] focus:outline-none focus:ring-0"
        placeholder="메세지 보내기"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />

      <ArrowUp
        disabled={!userMessage}
        isActive={!!userMessage}
        onClick={handleClickSend}
      />
    </div>
  );
}
