import Image from "next/image";

export default function ChatInput() {
  return (
    <div className="bg-white w-full h-[58px] absolute bottom-0 left-0 flex justify-between px-5 pb-1">
      <input
        type="text"
        className="placeholder-gray5 border-none focus:outline-none p-0 flex-1"
        placeholder="메세지 보내기"
      />

      <Image
        src={"/images/chat/ic-arrow-up.svg"}
        alt={"arrow-up"}
        width={24}
        height={24}
        className={"cursor-pointer"}
      />
    </div>
  );
}
