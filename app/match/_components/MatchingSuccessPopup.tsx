"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import useModalControl from "#/app/modalControl.state";
import { useMatchingSuccessInfo } from "#/app/match/matching.state";

export const MatchingSuccessPopup = () => {
  //매칭 대상자 정보 불러오고(zustand로)
  const { matchingSuccessInfo } = useMatchingSuccessInfo();

  const { push } = useRouter();

  const { updateIsMatchingSuccessModalOpen } = useModalControl();

  const keepMatching = () => {
    updateIsMatchingSuccessModalOpen(false);
  };

  const moveChatting = () => {
    if (matchingSuccessInfo?.messageRoomId)
      push(routerPaths.chattingRoom(matchingSuccessInfo.messageRoomId));

    updateIsMatchingSuccessModalOpen(false);
  };

  return (
    <div className="z-50 absolute top-0 left-0 w-full h-full flex-center-col bg-white bg-opacity-80">
      <Image
        src={"/images/match/img-partyPopper@x2.png"}
        alt={"매칭 축하"}
        width={100}
        height={100}
        className="mb-2"
      />

      <h2 className="text-pointBlue2 text-subtitle font-extrabold mb-2">
        매칭되었어요!
      </h2>

      <p className="text-center text-[17px] font-bold text-gray7 mb-9">
        {matchingSuccessInfo.matchInfo?.toMember.username} 님이
        <br />
        같이 이야기 나누고 싶어해요.
      </p>

      <div className="flex gap-[22px] mb-9">
        <img
          src={matchingSuccessInfo.matchInfo?.fromMember.imgUrl}
          alt={"profile"}
          className="w-[100px] h-[100px] rounded-full border-4 border-white"
        />

        <img
          src={matchingSuccessInfo.matchInfo?.toMember.imgUrl}
          alt={"profile"}
          className="w-[100px] h-[100px] rounded-full border-4 border-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="shadow-md bg-pointBlue2 rounded-[80px] text-white font-bold text-[15px] py-[14px] w-[220px] flex-center gap-2"
          onClick={moveChatting}
        >
          <Image
            src={"/images/chat/ic-chatting.svg"}
            alt={"chat"}
            width={24}
            height={24}
          />
          대화 시작하기
        </button>
        <button
          className="shadow-md bg-white rounded-[80px] text-pointBlue2 font-bold text-[15px] py-[14px] w-[220px] flex-center gap-2"
          onClick={keepMatching}
        >
          <Image
            src={"/images/chat/ic-usergroup.svg"}
            alt={"user"}
            width={24}
            height={24}
          />
          다른 매칭 계속하기
        </button>
      </div>
    </div>
  );
};
