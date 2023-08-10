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

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareat = e.target;
    textareat.style.height = "auto";
    textareat.style.height = textareat.scrollHeight + "px";
    setUserMessage(e.target.value);
  };

  return (
    <div className="bg-white w-full h-auto flex flex-shrink-0 items-center justify-between px-5 pt-3 pb-4">
      <textarea
        className="placeholder-gray5 resize-none border-none p-0 w-[90%] max-h-[100px] focus:outline-none focus:ring-0 "
        rows={1}
        placeholder="메세지 보내기"
        value={userMessage}
        onChange={handleChangeMessage}
      />

      <ArrowUp disabled={!userMessage} onClick={handleClickSend} />
    </div>
  );
}
