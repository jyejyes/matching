import Image from "next/image";

type Props = {
  isNew: boolean;
  onClick: () => void;
};

export const ChattingRoomPreview = ({ isNew, onClick }: Props) => {
  return (
    <div className="w-full flex gap-3 py-2 cursor-pointer" onClick={onClick}>
      <div className="rounded-full w-[50px] h-[50px] bg-amber-200" />

      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <p className="text-[18px] font-bold">유저 이름</p>

            {isNew && (
              <Image
                src={"/images/chat/ic-new.svg"}
                alt={"new"}
                width={14}
                height={14}
              />
            )}
          </div>

          <p className="text-[14px] text-gray5">2023.01.01</p>
        </div>

        <p id="message" className="text-[15px] text-gray6 font-medium">
          가장 최근 메세지 Or 다른 메세지
        </p>
      </div>
    </div>
  );
};
