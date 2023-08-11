import Image from "next/image";
import { GetMessageResponseType } from "#/hooks/apis/useGetMessages";

type Props = {
  isNew: boolean;
  chatInfo: GetMessageResponseType;
  onClick: () => void;
};

export const ChattingRoomPreview = ({ isNew, chatInfo, onClick }: Props) => {
  const { toMember, lastMessage, createdTime } = chatInfo;

  return (
    <div
      className="w-full flex gap-3 py-[13px] cursor-pointer px-4 hover:bg-gray1"
      onClick={onClick}
    >
      <img src={toMember.imgUrl} className="rounded-full w-[50px] h-[50px]" />

      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <p className="text-[18px] font-bold">{toMember.username}</p>

            {isNew && (
              <Image
                src={"/images/chat/ic-new.svg"}
                alt={"new"}
                width={14}
                height={14}
              />
            )}
          </div>

          <p className="text-[14px] text-gray5">
            {createdTime.slice(0, 10).replaceAll("-", ".")}
          </p>
        </div>

        <p id="message" className="text-[15px] text-gray6 font-medium">
          {lastMessage.content}
        </p>
      </div>
    </div>
  );
};
