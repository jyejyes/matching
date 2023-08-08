"use client";

import ChatInfo from "#/app/chat/[userId]/_components/ChatInfo";
import ChatInput from "#/app/chat/[userId]/_components/ChatInput";
import { SpeechBubble } from "#/ui/components/SpeechBubble";
import useModalControl from "#/app/modalControl.state";
import { DeleteChattingRoomModal } from "#/app/chat/[userId]/_components/DeleteChattingRoomModal";

export default function Page() {
  const { isDeleteChatModalOpen } = useModalControl();

  return (
    <div className="w-full h-full overflow-hidden relative bg-gray1">
      {isDeleteChatModalOpen && <DeleteChattingRoomModal />}

      <ChatInfo />

      {/*  TODO: scroll 생각하기*/}
      <div className="w-full px-4 py-3">
        <p className="text-[14px] text-center text-gray6 p-3">
          매칭 후 첫 인사 시<br />
          언제나 상대방을 존중해주는 것, 잊지 마세요!
        </p>

        <div className="flex flex-col gap-1 w-full">
          <SpeechBubble subject={"you"} content={"안녕하세요~"} />
          <SpeechBubble subject={"you"} content={"저도 백엔드 하고 있어요."} />

          <SpeechBubble subject={"me"} content={"헛 반갑습니다."} />
          <SpeechBubble
            subject={"me"}
            content={
              "네 역시 여기도 텍스트 채팅 문구의 최대 가로폭은 270px로 고정하려고 해요. 어떻게 생각하세요?"
            }
          />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
