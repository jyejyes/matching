"use client";

import ChatInfo from "#/app/chat/[userId]/_components/ChatInfo";
import ChatInput from "#/app/chat/[userId]/_components/ChatInput";
import { SpeechBubble } from "#/ui/components/SpeechBubble";
import useModalControl from "#/app/modalControl.state";
import { DeleteChattingRoomModal } from "#/app/chat/[userId]/_components/DeleteChattingRoomModal";
import { useGetMessageRoom } from "#/hooks/apis/useGetMessageRoom";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Page() {
  const roomId = Number(usePathname().split("/")[2]);

  const { isDeleteChatModalOpen } = useModalControl();

  const { data: messageRoomInfo, isLoading } = useGetMessageRoom(roomId);

  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden relative bg-gray1">
      {isDeleteChatModalOpen && (
        <DeleteChattingRoomModal chatId={messageRoomInfo.matchId} />
      )}

      {isLoading ? (
        <div></div>
      ) : (
        <ChatInfo
          matchId={messageRoomInfo.matchId}
          name={messageRoomInfo?.partnerName}
          partnerId={messageRoomInfo?.partnerId}
        />
      )}

      {/*  TODO: scroll 생각하기*/}
      <main
        ref={scrollRef}
        className="w-full px-4 py-3 flex-grow overflow-y-auto"
      >
        <p className="text-[14px] text-center text-gray6 p-3">
          매칭 후 첫 인사 시<br />
          언제나 상대방을 존중해주는 것, 잊지 마세요!
        </p>

        <div className="flex flex-col gap-1 w-full">
          {isLoading ? (
            <div></div>
          ) : (
            messageRoomInfo?.messages?.map((msg, i) => (
              <SpeechBubble
                key={msg.id}
                isMe={msg?.messageWriter.id === messageRoomInfo.loginMemberId}
                content={msg.content}
              />
            ))
          )}
        </div>
      </main>

      <ChatInput />
    </div>
  );
}
